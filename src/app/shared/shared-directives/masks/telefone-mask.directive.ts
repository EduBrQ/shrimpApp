import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
    selector: '[appTelefoneMask]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TelefoneMaskDirective),
        multi: true
    }]
})
export class TelefoneMaskDirective implements ControlValueAccessor {
    onTouched: any;
    onChange: any;
    value: any;
    private regexApplyTelefone: StringMask;
    private digitoBackspace = 8;

    constructor(private element: ElementRef) {
        this.regexApplyTelefone = new StringMask('(00) 00000-0000');
    }

    writeValue(value: any): void {
        if (value != null) {
            if (value.indexOf('-') === -1) {
                this.element.nativeElement.value = this.regexApplyTelefone.apply(value);
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
            this.onChange(valor);
            return;
        }
        const caracteresEspeciais = ['(', ')', '-', ' '];

        if (caracteresEspeciais.includes($event.target.value[$event.target.value.length - 1])) {
            let mascaraAplicada: string;
            mascaraAplicada = this.regexApplyTelefone.apply(valor);

            $event.target.value = mascaraAplicada.substring(0, mascaraAplicada.length - 1);
            this.onChange(valor);
            return;
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
        $event.target.value = this.regexApplyTelefone.apply(valor);
        return;
    }

    setDisabledState(isDisabled: boolean): void {
        if (this.element != null) {
            this.element.nativeElement.disabled = isDisabled;
        }
    }

}