import { Directive, forwardRef, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as StringMask from 'string-mask';
@Directive({
    selector: '[appCpfCnpjMask]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CpfCnpjMaskDirective),
        multi: true
    }]
})
export class CpfCnpjMaskDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;
    value: any;
    private regexApplyCpf: StringMask;
    private regexApplyCnpj: StringMask;
    private quantidadeDigitoCpf = 11;
    private quantidadeDigitoCnpj = 14;
    private digitoBackspace = 8;


    constructor(private element: ElementRef) {
        element.nativeElement.maxLength = 18;
        this.regexApplyCpf = new StringMask('000.000.000-00');
        this.regexApplyCnpj = new StringMask('00.000.000\/0000-00');
    }

    writeValue(value: any): void {
        if (value != null) {
            if (value.indexOf('.') === -1) {
                if (value.length === 11) {
                    this.element.nativeElement.value = this.regexApplyCpf.apply(value);
                } else if (value.length === 14) {
                    this.element.nativeElement.value = this.regexApplyCnpj.apply(value);
                } else {
                    this.element.nativeElement.value = value;
                }
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

    private getValorAbsoluto(targetValue: string): string {
        return targetValue.replace(/\D/g, '');
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        const valor = this.getValorAbsoluto($event.target.value);
        if ($event.keyCode === this.digitoBackspace) {
            const caracteresEspeciais = ['.', '/', '-'];
            if (caracteresEspeciais.includes($event.target.value[$event.target.value.length - 1])) {
                let mascaraAplicada: string;
                if (valor.length <= this.quantidadeDigitoCnpj) {
                    mascaraAplicada = this.regexApplyCnpj.apply(valor);
                }
                if (valor.length <= this.quantidadeDigitoCpf) {
                    mascaraAplicada = this.regexApplyCpf.apply(valor);
                }
                $event.target.value = mascaraAplicada.substring(0, mascaraAplicada.length - 1);
                this.onChange(valor);
                return;
            }
        }
        this.aplicarMascara($event);
    }
    @HostListener('keydown', ['$event'])
    onKeydown($event: any) {
        const valor = this.getValorAbsoluto($event.target.value);
        if ($event.keyCode === this.digitoBackspace) {
            this.onChange(valor);
            return;
        }
        this.aplicarMascara($event);
    }

    aplicarMascara($event: any) {
        const valor = this.getValorAbsoluto($event.target.value);
        this.onChange(valor);
        if (valor.length <= this.quantidadeDigitoCpf) {
            $event.target.value = this.regexApplyCpf.apply(valor);
        } else if (valor.length <= this.quantidadeDigitoCnpj) {
            $event.target.value = this.regexApplyCnpj.apply(valor);
        }
        return;
    }

    setDisabledState(isDisabled: boolean) {
        if (this.element != null) {
            this.element.nativeElement.disabled = isDisabled;
        }
    }

}
