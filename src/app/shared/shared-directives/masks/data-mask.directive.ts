import { Directive, HostListener } from '@angular/core';
import * as StringMask from 'string-mask';
import { DataUtilService } from 'app/shared/util/data-util.service';

@Directive({
  selector: '[appDataMask]'
})
export class DataMaskDirective {

  private regexApplyDate: StringMask;
  private digitoBackspace = 8;

  constructor(private dataUtilSerivce: DataUtilService) {
    this.regexApplyDate = new StringMask('00/00/0000');
  }

  private getValorAbsoluto(targetValue: string): string {
    return targetValue.replace(/\D/g, '');
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: any) {
    const valor = this.getValorAbsoluto(event.target.value);
    if (event.keyCode !== this.digitoBackspace) {
      event.target.value = this.regexApplyDate.apply(valor);
    }

    return;
  }

  @HostListener('focusout', ['$event.target'])
  onFocusout(target: any) {
    const date = this.dataUtilSerivce.converterStringParaDate(target.value);
    if (date.toString() === 'Invalid Date') {
      target.value = target.value.replace(/(Invalid date)/, '');
    }
  }

}
