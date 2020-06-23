import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap';

@Injectable()
export class AppModalService {
  private modalAtual: BsModalRef;

  constructor(private bsModalSvc: BsModalService) {
  }

  abrirModal(obj: any, modalOpt: ModalOptions = {
    class: 'modal-dialog-centered'
  }) {
    this.modalAtual = this.bsModalSvc.show(obj, modalOpt);
  }

  fecharModalAtual() {
    if (this.modalAtual) {
      this.modalAtual.hide();
    }
  }
}
