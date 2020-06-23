import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { MtNgxModalConfig } from '../models/mt-ngx-modal-config.model';
import { MtNgxModalConfirmConfig } from '../models/mt-ngx-modal-confirm-config.model';
import { MtNgxModalConfirm } from '../models/mt-ngx-modal-confirm.model';
import { MtNgxModal } from '../models/mt-ngx-modal.model';

@Injectable()
export class MtNgxModalService {
    private modals: MtNgxModal[] = [];
    private bsModalRefs: Map<string, BsModalRef> = new Map();

    private latestModal: any;
    idRecurso: string;

    constructor(
        public bsModalService: BsModalService
    ) {
        this.bsModalService.config.ignoreBackdropClick = true;
    }

    openDialog(config: MtNgxModalConfirmConfig): MtNgxModalConfirm {
        if (config) {
            if (config.id === undefined || config.id === null) {
                config.id = this.generateHashId();
            }
            if (config.botaoStyle == null) {
                config.botaoStyle = 'btn-success';
            }
            if (config.template.name === 'ModalApresentarRecursoComponent') {
                if (!this.idRecurso) {
                    this.idRecurso = config.id;
                }
            }
        }

        const mtNgxNewModal: MtNgxModalConfirm = {
            mtNgxModalConfig: config,
            onActionEvt: new Subject<boolean>()
        };
        mtNgxNewModal.onAction = mtNgxNewModal.onActionEvt.asObservable();

        this.addModalToList(mtNgxNewModal.mtNgxModalConfig, mtNgxNewModal);
        const bsModalRef = this.bsModalService.show(config.template, config.ngxModalOptions);
        this.bsModalRefs.set(mtNgxNewModal.mtNgxModalConfig.id, bsModalRef);
        return mtNgxNewModal;
    }

    closeModal(id: string) {
        try {
            this.modals = this.modals.filter(x => x.mtNgxModalConfig.id !== id);
            this.bsModalRefs.get(id).hide();
            this.bsModalRefs.delete(id);
        } catch (error) {
            console.error(error);
        }
    }

    getLatestModalOpened<T>(): T {
        return this.latestModal;
    }

    private addModalToList(mtNgxModalConfig: MtNgxModalConfig, mtNgxNewModal: any) {
        // this.modals = [];
        if (
            !this.modals.find(x => x.mtNgxModalConfig.id === mtNgxModalConfig.id)
        ) {
            if (mtNgxNewModal.mtNgxModalConfig.template.name !== 'ModalApresentarRecursoComponent') {
                this.modals.push(mtNgxNewModal);
                this.latestModal = mtNgxNewModal;
            }
        }
    }

    closeModalRecurso() {
        this.bsModalRefs.get(this.idRecurso).hide();
    }

    generateHashId(): string {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}





