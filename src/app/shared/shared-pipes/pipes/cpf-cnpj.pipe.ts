import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';
@Pipe({
    name: 'cpfCnpjTradutor'
})
export class CpfCnpjPipe implements PipeTransform {
    regexApplyCpf = new StringMask('000.000.000-00');
    regexApplyCnpj = new StringMask('00.000.000\/0000-00');

    transform(value: string): string {
        if (value) {
            if (value.length === 11) {
                return this.regexApplyCpf.apply(value);
            }

            if (value.length === 14) {
                return this.regexApplyCnpj.apply(value);
            }

            return value;
        }
    }

}
