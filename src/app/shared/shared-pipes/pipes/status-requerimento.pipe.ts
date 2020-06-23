import { Pipe, PipeTransform } from '@angular/core';
import { StatusRequerimentoEnumMensagem, StatusRequerimentoEnum } from '@shared/models/enum/status-requerimento.enum';

@Pipe({
    name: 'statusRequerimentoTradutor'
})
export class StatusRequerimentPipe implements PipeTransform {

    transform(value: StatusRequerimentoEnum): any {
        return StatusRequerimentoEnumMensagem[value];
    }

}
