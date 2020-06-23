import { Pipe, PipeTransform } from '@angular/core';
import { TipoRequerimentoEnumMensagem, TipoRequerimentoEnum } from '@shared/models/enum/tipo-requerimento.enum';

@Pipe({
    name: 'tipoRequerimentoTradutor'
})
export class TipoRequerimentPipe implements PipeTransform {

    transform(value: TipoRequerimentoEnum): any {

        return TipoRequerimentoEnumMensagem[TipoRequerimentoEnum[value]];
    }

}
