import { MtNgxModalConfig } from './mt-ngx-modal-config.model';

export interface MtNgxModalConfirmConfig extends MtNgxModalConfig {
    flow?: string;
    flagPagamento?: boolean;
    template: any;
    showList?: string;
    question: string;
    title?: string;
    cancelText?: string;
    confirmText?: string;
    botaoStyle?: string;
    tipoReqVerificacao?: boolean;
    reqCriacao?: boolean;
}

