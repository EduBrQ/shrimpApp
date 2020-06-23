import { ModalDialog } from './../../shared-components/components/modal-confirmar-dialog/models/modal-dialog.model';
import { ModalConfirmarDialogComponent } from './../../shared-components/components/modal-confirmar-dialog/modal-confirmar-dialog.component';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class SipuModalService {
    modais: Map<string, BsModalRef> = new Map<string, BsModalRef>();

    constructor(
        public bsModalService: BsModalService,
        private router: Router
    ) {
        this.cadastrarRotas();
    }
    /**
     * Cadastrar servico para ouvir as rotas da aplicação e fechar algum modal que esteja aberto durante a transição.
     */
    private cadastrarRotas() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.ocultarTodos();
            });
    }

    /**
     * Metodo utilizado para exibir um modal na aplicação.
     * @param id ID do modal para exibição e controle.
     * @param content Conteudo do modal
     * @param options Opções para exibição do modal
     */
    exibir(id: string, content: any, options?: ModalOptions) {
        const modalRef: BsModalRef = this.bsModalService.show(content, {
            animated: options.animated || true,
            backdrop: options.backdrop || true,
            ignoreBackdropClick: options.ignoreBackdropClick || true,
            class: options.class,
            focus: options.focus || true,
            initialState: options.initialState,
            keyboard: options.keyboard || false,
            show: options.show
        });
        this.modais.set(id, modalRef);
    }

    /**
     * Metodo utilizado para exibir um modal na aplicação.
     * @param id ID do modal para exibição e controle.
     * @param content Conteudo do modal
     * @param options Opções para exibição do modal
     */
    exibirModal(content: any, options?: ModalOptions) {
        this.bsModalService.show(content, {
            animated: options.animated || true,
            backdrop: options.backdrop || true,
            ignoreBackdropClick: options.ignoreBackdropClick || true,
            class: options.class,
            focus: options.focus || true,
            initialState: options.initialState,
            keyboard: options.keyboard || false,
            show: options.show
        });
    }

    /**
     * Metodo utilizado para ocultar um modal em exibição.
     * @param id ID do modal que deseja ocultar
     */
    ocultar(id: string) {
        if (this.modais.has(id)) {
            this.modais.get(id).hide();
            this.modais.delete(id);
        }
    }

    /**
     * Ocultar todos os modais em exibição.
     */
    ocultarTodos() {
        if (this.bsModalService.getModalsCount() > 0) {
            this.modais.forEach((value, key) => {
                if (this.modais.has(key)) {
                    value.hide();
                    this.modais.delete(key);
                }
            });
        }
    }

    /**
     * Cria um modal de cancelar/confirmar com a mensagem customizada.
     * @returns Observable<boolean> caso o usuário clique em confirmar.
     */
    openDialog(modalDialog: ModalDialog, template: any = ModalConfirmarDialogComponent, confirmarCiente = false ): Observable<boolean> {
        this.exibir('MODAL_CONFIRM', template, {
            class: 'modal-dialog-centered',
            initialState: {
                modalDialog,
                confirmarCiente
            }
        });
        return this.modais.get('MODAL_CONFIRM').content.confirmarEvt;
    }

    /**
     * Cria um modal.
     */
    open(componente, initialState?: Object): void {
        this.bsModalService.show(componente, {
            class: 'modal-dialog-centered modal-lg',
            initialState
        });
    }

    //   openModalInfo(mensagem: string): Observable<boolean> {
    //     this.exibir('MODAL_INFO', ModalInformativoComponent, {
    //       class: 'modal-dialog-centered',
    //       initialState: {
    //         mensagem
    //       }
    //     });
    //     return this.modais.get('MODAL_INFO').content.confirmarEvt;
    //   }

    //   openModalEstouCiente(mensagem: string, titulo: string): Observable<boolean> {
    //     this.exibir('MODAL_ESTOU_CIENTE', ModalEstouCienteComponent, {
    //       class: 'modal-dialog-centered',
    //       initialState: {
    //         mensagem,
    //         titulo
    //       }
    //     });
    //     return this.modais.get('MODAL_ESTOU_CIENTE').content.confirmarEvt;
    //   }
}
