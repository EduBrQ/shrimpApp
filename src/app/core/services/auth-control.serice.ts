import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SessionStorageKeyEnum } from "src/app/shared/shared-models/enum/session-storage-key.enum";
import { AutenticacaoModel } from "src/app/shared/shared-models/interface/autenticacao.model";
import { environment } from "environments/environment";
import * as jwtDecode from "jwt-decode";
import { SessionStorageService } from "./app-session-storage.service";
import { EventEmitterService } from "./event-emitter.service";
import { LoginService } from "./login.service";
import { EventosGlobaisEnum } from "./siurbe/model/eventos-globais.enum";

@Injectable()
export class AuthControlService {
    private usuarioAutenticado: AutenticacaoModel;
    constructor(
        private sessionService: SessionStorageService,
        private route: Router,
        private loginService: LoginService
    ) { }

    isLogged() {
        if (this.usuarioAutenticado == null) {
            this.usuarioAutenticado = this.sessionService.recuperarValor(
                SessionStorageKeyEnum.AUTH_OBJ
            );
        }
        return this.usuarioAutenticado != null;
    }

    setUsuarioLogado(autenticacaoModel: AutenticacaoModel) {
        this.usuarioAutenticado = autenticacaoModel;
        this.sessionService.salvarValor(
            SessionStorageKeyEnum.AUTH_OBJ,
            autenticacaoModel
        );
        localStorage.setItem(
            SessionStorageKeyEnum.AUTH_OBJ,
            btoa(JSON.stringify(autenticacaoModel)))
        EventEmitterService.get(EventosGlobaisEnum.SET_USER_LOGADO).emit(
            this.usuarioAutenticado
        );
    }

    refreshUser() {
        if (this.usuarioAutenticado.refreshToken) {
            this.loginService
                .atualizarToken(this.usuarioAutenticado.refreshToken)
                .subscribe((newUser: AutenticacaoModel) => {
                    this.setUsuarioLogado(newUser);
                });
        }
    }

    getNomeUsuario() {
        return this.usuarioAutenticado.nomeUsuario;
    }

    getUsuarioLogado(): AutenticacaoModel {
        const usuario = this.usuarioAutenticado;
        if (usuario) {
            usuario.tokenModelo = jwtDecode(usuario.token);
        }
        return this.isLogged ? usuario : null;
    }

    getUsuarioLogadoLocal(): AutenticacaoModel {
        if (sessionStorage.getItem(SessionStorageKeyEnum.AUTH_OBJ) != null) {
            const usuario = JSON.parse(
                atob(localStorage.getItem(SessionStorageKeyEnum.AUTH_OBJ) || null)
            );

            usuario.tokenModelo = jwtDecode(usuario.token);
            return usuario;
        }

        return null;
    }

    getTipoUsuario() {
        return this.usuarioAutenticado.tipoUsuario;
    }

    permissaoUsuario(fluxo) {
        const tipoUser = this.getTipoUsuario().toString();
        switch (fluxo) {
            case "regras":
                switch (tipoUser) {
                    case "INTERNO":
                        return true;
                    case "RESPONSAVEL_TECNICO":
                        return false;
                    case "PROPRIETARIO":
                        return false;
                }
                break;
            case "requerimentos":
                switch (tipoUser) {
                    case "INTERNO":
                        return true;
                    case "RESPONSAVEL_TECNICO":
                        return true;
                    case "PROPRIETARIO":
                        return true;
                }
                break;
            case "acoes":
                switch (tipoUser) {
                    case "INTERNO":
                        return true;
                    case "RESPONSAVEL_TECNICO":
                        return false;
                    case "PROPRIETARIO":
                        return false;
                }
                break;
        }
    }

    logOut() {
        this.sessionService.limparValores([SessionStorageKeyEnum.AUTH_OBJ]);
        this.usuarioAutenticado = null;
        localStorage.clear();
        sessionStorage.clear();
        EventEmitterService.get(EventosGlobaisEnum.LOGOUT).emit();
        this.route.navigateByUrl("/parcelamento-solo");
    }

    logoutCAS(): void {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("id", "mIframe");
        iframe.onload = () => {
            this.logOut();
            document.getElementById("mIframe").remove();
        };
        iframe.setAttribute("src", environment.URL_CAS_LOGOUT);
        iframe.hidden = true;
        document.body.appendChild(iframe);
    }
}
