import { Directive, HostListener, forwardRef, ElementRef } from '@angular/core';
import * as StringMask from 'string-mask';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appCepMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CepMaskDirective),
    multi: true
  }]
})
export class CepMaskDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;
  value: any;
  private digitosEspeciais = [8, 37, 39, 46, 17];
  private regexCep: StringMask;

  constructor(private element: ElementRef) {
    this.regexCep = new StringMask('00.000-000');
  }

  writeValue(value: any): void {
    if (value != null) {
      if (value.indexOf('-') === -1) {
        this.element.nativeElement.value = this.regexCep.apply(value);
      }
    }
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    if (!this.digitosEspeciais.includes($event.keyCode)) {
      this.aplicarMascara($event);
      return;
    } else {
      const valor = this.getValorAbsoluto($event.target.value);
      this.onChange(valor);
    }
  }

  aplicarMascara(event) {
    const valor = this.getValorAbsoluto(event.target.value);
    this.onChange(valor);
    event.target.value = this.regexCep.apply(valor);
    return;
  }

  private getValorAbsoluto(targetValue: string): string {
    return targetValue.replace(/\D/g, '');
  }

  @HostListener('keydown', ['$event'])
  onKeydown($event: any) {
    if (!this.digitosEspeciais.includes($event.keyCode)) {
      this.aplicarMascara($event);

      return;
    }
  }

}
