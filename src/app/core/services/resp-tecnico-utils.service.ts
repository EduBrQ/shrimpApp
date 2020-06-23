import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormacoesModel } from 'src/app/shared/shared-models/interface/formacoes.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AuthControlService } from './auth-control.serice';
import { ToastrService } from 'ngx-toastr';
import { ResponsavelTecnicoVisualizarDTO } from 'app/modules/private/modules/requerimento/modules/cadastro-requerimento/models/interface/visualizar-dto/responsavel-tecnico-visualizar-dto';
import { DadosRTEnum } from 'app/modules/private/modules/requerimento/modules/cadastro-requerimento/components/sub-components/manter-responsavel-tecnico/models/enum/dados-rt.enum';

@Injectable()
export class ResponsavelTecUtilsService {

    private mensagemTextError: string;

    constructor(
        private http: HttpClient,
        private authService: AuthControlService,
        private toastr: ToastrService
    ) { }

    getMensagemTextoError() {
        return this.mensagemTextError;
    }

    getProfissoes(): Observable<FormacoesModel[]> {
        return this.http.get<FormacoesModel[]>(`${environment.apiUrl}/responsaveis-tecnicos/formacoes`);
    }

    consultarDisponibilidadeCadastro(documento: string): Observable<ResponsavelTecnicoVisualizarDTO> {
        return this.http.get<ResponsavelTecnicoVisualizarDTO>(`${environment.apiUrl}/responsaveis-tecnicos/disponibilidade-cadastro/${documento}`);
    }

    consultarDocUsuarioLogado() {
        const usuarioLogado = this.authService.getUsuarioLogado();
        if (usuarioLogado) {
            return usuarioLogado.documento;
        }
    }

    consultarCamposFaltantes() {
        const documentacao = this.consultarDocUsuarioLogado();
        const tipoUsuario = this.authService.getTipoUsuario();

        let camposFaltantesFormulario = [];

        return new Promise<boolean>((resolve) => {
            if (documentacao && tipoUsuario.toString() == 'RESPONSAVEL_TECNICO') {

                this.consultarDisponibilidadeCadastro(documentacao).subscribe((dadosRT) => {
                    delete dadosRT.idEdificacoes;

                    for (let dado in dadosRT) {
                        if (dado != 'telefone') {
                            if (dadosRT[dado] == null) {
                                camposFaltantesFormulario.push(DadosRTEnum[dado]);
                            }
                        }
                    }

                    if (dadosRT.profissao.codigo == null) {
                        camposFaltantesFormulario.push(DadosRTEnum.profissao);
                    }

                    if (camposFaltantesFormulario.length > 0) {
                        this.mensagemTextError = `${dadosRT.nome} para criar um novo requerimento é necessário completar o(s) campo(s) [${camposFaltantesFormulario}] em seu cadastro através do menu “Meus dados” acima.`;
                        this.toastr.error(this.mensagemTextError);
                    }

                    resolve(camposFaltantesFormulario.length > 0);
                });

            }
        });


    }

}
