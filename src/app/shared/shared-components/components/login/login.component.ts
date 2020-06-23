import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacaoFormularioService } from '@shared/modules/validacao-formulario/services/validacao-formulario.service';
import { ToastrService } from 'ngx-toastr';
import { AppModalService } from '../../../../core/services/app-modal.service';
import { CredenciaisModel } from '@shared/models/interface/credenciais.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() linkCadastro: string;
  formResponsavelLogin: FormGroup;
  formRecuperarSenha: FormGroup;

  @Output()
  doLogin: EventEmitter<CredenciaisModel> = new EventEmitter();

  @Output()
  recuperarSenhaEmitter: EventEmitter<string> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private validacaoForm: ValidacaoFormularioService,
    private toastr: ToastrService,
    private modalService: AppModalService
  ) {
  }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formResponsavelLogin = this.formBuilder.group({
      cpfCnpjLogin: ['', [Validators.required]],
      senhaLogin: ['', [Validators.required]]
    });

    this.formRecuperarSenha = this.formBuilder.group({
      recuperarSenha: ['',Validators.required]
    });
  }

  loginUser() {
    try {
      Object.keys(this.formResponsavelLogin.controls).forEach(control => {
        this.formResponsavelLogin.get(control).updateValueAndValidity();
      });
      this.validacaoForm.validarFormulario(this.formResponsavelLogin);
      if (this.formResponsavelLogin.valid) {
        this.doLogin.next({
          senha: this.formResponsavelLogin.get('senhaLogin').value,
          cpfCnpj: this.formResponsavelLogin.get('cpfCnpjLogin').value
        });
      }
    } catch (error) {
      this.toastr.warning(error.message);
    }
  }

  abrirModal(ref) {
    this.modalService.abrirModal(ref);
  }

  fecharModal() {
    this.modalService.fecharModalAtual();
  }

  recuperarSenha() {
    this.recuperarSenhaEmitter.next(this.formRecuperarSenha.get('recuperarSenha').value);
  }
}
