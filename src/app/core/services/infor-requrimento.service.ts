import { Injectable } from '@angular/core';
import { InfoRequerimentoModel } from 'src/app/shared/shared-models/interface/info-requerimento.mode';
import { Subject } from 'rxjs';

@Injectable()
export class InfoRequerimentoService {
    private atualizarInformacoesRequerimentoEvt: Subject<InfoRequerimentoModel> = new Subject();
    atualizarInformacoesRequerimento$ = this.atualizarInformacoesRequerimentoEvt.asObservable();
    constructor() { }

    atualizarInformacoes(infoModel: InfoRequerimentoModel) {
        this.atualizarInformacoesRequerimentoEvt.next(infoModel);
    }
}
