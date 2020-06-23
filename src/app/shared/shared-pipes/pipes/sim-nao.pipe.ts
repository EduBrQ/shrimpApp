import { Pipe, PipeTransform } from '@angular/core';
import { SimNaoEnumMensagem } from '@shared/models/enum/sim-nao.enum';

@Pipe({
    name: 'simNaoTradutor'
})
export class SimNaoPipe implements PipeTransform {

    transform(value: any): any {
        return SimNaoEnumMensagem[value];
    }

}
