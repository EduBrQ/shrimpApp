import { ModalidadeParcelamentoEnumMensagem } from './../../../modules/private/modules/requerimento/modules/cadastro-requerimento/models/enum/modalidade-parcelamento.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'modalidadeParcelamentoTradutor'
})
export class ModalidadeParcelamentoPipe implements PipeTransform {

    transform(value: any): any {
        return ModalidadeParcelamentoEnumMensagem[value];
    }

}