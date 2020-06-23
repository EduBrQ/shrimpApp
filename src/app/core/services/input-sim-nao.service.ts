import { Injectable } from '@angular/core';
import { InputListaRadioModel } from '@shared/components/components/input-lista-radio/models/input-lista-radio.model';
import { SimNaoEnum, SimNaoEnumMensagem } from 'src/app/shared/shared-models/enum/sim-nao.enum';

@Injectable()
export class InputSimNaoService {

    constructor() { }

    criarListaInputSimNao(valoDefault?: SimNaoEnum): InputListaRadioModel[] {
        return [
            {
                valor: SimNaoEnum.N,
                valorExibicao: SimNaoEnumMensagem[SimNaoEnum.N],
                default: valoDefault != null ? valoDefault === SimNaoEnum.N : false
            },
            {
                valor: SimNaoEnum.S,
                valorExibicao: SimNaoEnumMensagem[SimNaoEnum.S],
                default: valoDefault != null ? valoDefault === SimNaoEnum.S : false
            }
        ];
    }
}
