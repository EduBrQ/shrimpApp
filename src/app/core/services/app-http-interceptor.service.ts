import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import HttpStatusCode from '@shared/models/enum/http-status.enum';
import { MensagemEnum } from '@shared/models/enum/mensagem.enum';
import { TipoAppResponseEnum } from '@shared/models/enum/tipo-app-response.enum';
import { AppResponsePadraoModel } from '@shared/models/interface/app-response-padrao.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthControlService } from './auth-control.service';

export class AppHttpInterceptor implements HttpInterceptor {
  static exibindoSpinner = false;
  requestCount = 0;
  constructor(
    private toastrService: ToastrService,
    private loadingService: NgxSpinnerService,
    private authControlService: AuthControlService,
  ) {
    this.loadingService.spinnerObservable.subscribe(show => {
      AppHttpInterceptor.exibindoSpinner = show;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    const STATUS_INDEFINIDO = 0;
    let reqToken = null;
    if (this.authControlService.isLogged()) {
      reqToken = req.clone({
        headers: req.headers.set('Authorization', `${this.authControlService.getUsuarioLogado().token}`)
      });
    }
    return next.handle(reqToken !== null ? reqToken : req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.exibirMensagem(event.body as AppResponsePadraoModel);
        this.decrementarRequests();
      } else {
        this.requestCount++;
      }
    },
      (response) => {
        this.decrementarRequests();
        if (response.status === STATUS_INDEFINIDO) {
          this.toastrService.error(MensagemEnum.SERVICO_INDISPONIVEL);
        } else if (response.error !== undefined) {
          switch (response.status) {
            case HttpStatusCode.BAD_REQUEST:
              let valorResponse = response.error;
              const tipoResponse = typeof valorResponse;
              try {
                if (tipoResponse === 'string') {
                  valorResponse = JSON.parse(valorResponse);
                }
                (valorResponse as AppResponsePadraoModel[]).forEach(appErrorModel => this.exibirMensagem(appErrorModel));
              } catch (error) {
                if (tipoResponse === 'object') {
                  this.toastrService.error(MensagemEnum.ERRO_SIURBE);
                } else {
                  this.toastrService.error(MensagemEnum.ERRO_AO_REALIZAR_PARSE_JSON);
                }
              }
              break;

            case HttpStatusCode.UNAUTHORIZED:
              this.authControlService.logoutCAS();
              this.toastrService.error(MensagemEnum.SESSAO_EXPIRADA);
              break;

            case HttpStatusCode.NOT_FOUND:
              this.toastrService.error(MensagemEnum.SERVICO_NAO_EXISTE);
              console.error(MensagemEnum.ERRO_NO_SERVICO.replace('{VALUE}', (response as HttpResponse<any>).url));
              break;

            case HttpStatusCode.INTERNAL_SERVER_ERROR:
              this.toastrService.error(MensagemEnum.ERRO_INTERNO);
              console.error(MensagemEnum.ERRO_NO_SERVICO.replace('{VALUE}', (response as HttpResponse<any>).url));
              break;

            default:
              this.toastrService.error(MensagemEnum.ERRO_DESCONHECIDO);
              break;
          }
        }
      }));
  }

  private decrementarRequests() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.loadingService.hide();
      this.requestCount = 0;
    }
  }


  private exibirMensagem(erroModel: AppResponsePadraoModel) {

    try {
      if (erroModel) {
        if (erroModel.type != null) {
          if (erroModel.type === TipoAppResponseEnum.ERROR) {
            this.toastrService.error(erroModel.msg);
          } else if (erroModel.type === TipoAppResponseEnum.SUCCESS) {
            this.toastrService.success(erroModel.msg);
          }
        }
      }
    } catch (error) {
      this.toastrService.error(MensagemEnum.ERRO_AO_FORMATAR_MENSAGEM);
    }
  }
}
