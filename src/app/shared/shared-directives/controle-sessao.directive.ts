import { distinctUntilChanged } from 'rxjs/operators';
import { Directive, OnDestroy } from '@angular/core';

import { AuthControlService } from '@core/services/auth-control.serice';
import { AutenticacaoModel } from 'src/app/shared/shared-models/interface/autenticacao.model';

import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { EventEmitterService } from './../../core/services/event-emitter.service';
import { LoginService } from './../../core/services/login.service';

import { EventosGlobaisEnum } from './../../core/services/siurbe/model/eventos-globais.enum';
import { MensagemEnum } from './../shared-models/enum/mensagem.enum';
import { TipoUsuarioEnum } from './../shared-models/enum/tipo-usuario.enum';

@Directive({
  selector: '[appControleSessao]'
})
export class ControleSessaoDirective implements OnDestroy {

  usuarioLogado: AutenticacaoModel;
  intervalo: any;
  emValidacao = false;
  usuarioPresente = false;
  aguardandoAnalise = false;

  mouseAtivo = false;
  tecladoAtivo = false;

  subs: Subscription[] = [];

  constructor(
    private authService: AuthControlService,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.verificarSessao();
    this.validarMovimentoMouse();
    this.cadastrarEventos();
    this.validarTecladoAtivo();
  }

  private getUsuarioLogado() {
    this.usuarioLogado = this.authService.getUsuarioLogadoLocal();
    if (!this.usuarioLogado) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
    localStorage.clear();
  }

  public verificarSessao() {
    if (!this.intervalo) {
      this.intervalo = setInterval(() => {
        if (this.usuarioLogado) {
          this.calcularTempoExpiracao();
        } else {
          this.getUsuarioLogado();
        }
      }, 1000);
    } else {
      clearInterval(this.intervalo);
    }
  }

  private resetarValores() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
    this.emValidacao = false;
    this.usuarioPresente = false;
    this.aguardandoAnalise = false;
    this.mouseAtivo = false;
    this.tecladoAtivo = false;
  }


  private cadastrarEventos() {
    this.subs.push(
      EventEmitterService.get(EventosGlobaisEnum.LOGOUT).subscribe(() => {
        this.resetarValores();
      }),
    );
  }

  private atualizarToken() {
    this.subs.push(
      this.loginService.atualizarToken(
        this.usuarioLogado.refreshToken
      ).pipe(distinctUntilChanged())
        .subscribe((res) => {
          this.aguardandoAnalise = false;
          this.authService.setUsuarioLogado(res);
          this.getUsuarioLogado();
          this.emValidacao = false;
          this.usuarioPresente = false;
          this.mouseAtivo = false;
          this.tecladoAtivo = false;
        })
    );
  }

  private calcularTempoExpiracao() {
    const dataExpiracaoToken = new Date(0);
    dataExpiracaoToken.setSeconds(this.usuarioLogado.tokenModelo.exp);
    const minutos = Number((Math.abs(dataExpiracaoToken.getTime() - new Date().getTime()) / (1000 * 60) % 60).toFixed(0));
    const segundos = Number((Math.abs(dataExpiracaoToken.getTime() - new Date().getTime()) / (1000) % 60).toFixed(0));
    if (minutos <= 15) {
      if (minutos <= 0 && segundos <= 0) {
        this.logout();
      }
      this.emValidacao = true;
      if (this.validarUsuarioAtivo()) {
        this.aguardandoAnalise = true;

        this.validarNovoUsuario();
      }
    }
  }

  private validarNovoUsuario() {
    const usuarioAtual = this.authService.getUsuarioLogadoLocal();
    if (usuarioAtual) {
      if (usuarioAtual.refreshToken != this.usuarioLogado.refreshToken) {
        this.usuarioLogado = usuarioAtual;
        this.aguardandoAnalise = false;
        this.authService.setUsuarioLogado(usuarioAtual);
        this.emValidacao = false;
        this.usuarioPresente = false;
        this.mouseAtivo = false;
        this.tecladoAtivo = false;
      } else {
        this.atualizarToken();
      }
    }
  }

  private validarUsuarioAtivo(): boolean {
    return this.usuarioPresente && !this.aguardandoAnalise
      && (this.mouseAtivo || this.tecladoAtivo);
  }

  private logout() {
    if (this.authService.getTipoUsuario().toString() === TipoUsuarioEnum.INTERNO) {
      this.authService.logoutCAS();
    } else {
      this.authService.logOut();
    }
    this.toastr.error(MensagemEnum.SESSAO_EXPIRADA);
  }

  private validarMovimentoMouse() {
    window.onmousemove = () => {
      if (!this.usuarioPresente && this.emValidacao) {
        this.usuarioPresente = true;
        this.mouseAtivo = true;
      }
    };
  }

  private validarTecladoAtivo() {
    window.onkeydown = () => {
      if (!this.usuarioPresente && this.emValidacao) {
        this.usuarioPresente = true;
        this.tecladoAtivo = true;
      }
    }
  }

}
