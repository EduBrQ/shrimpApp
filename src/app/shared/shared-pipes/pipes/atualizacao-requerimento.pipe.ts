import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'atualizacaoRequerimentoTradutor'
})
export class AtualizacaoRequerimentPipe implements PipeTransform {

    transform(value: any): any {
        let mensagemRetorno: string;

        if (value === 0) {
            mensagemRetorno = 'Hoje';
        } else if (value === 1) {
            mensagemRetorno = value + ' dia atrás';
        }  else {
            mensagemRetorno = value + ' dias atrás';
        }

        return mensagemRetorno;
    }

}