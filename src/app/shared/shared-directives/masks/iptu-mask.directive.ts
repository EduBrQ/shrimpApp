
import { Directive, forwardRef, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Directive({
    selector: '[appIptuMask]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IptuMaskDirective),
        multi: true
    }]
})
export class IptuMaskDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;
    value: any;
    private digitoBackspace = 8;


    constructor(private element: ElementRef) {
    }

    writeValue(value: any): void {
        this.element.nativeElement.value = value;
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
        if ($event.keyCode === this.digitoBackspace) {
            let valor: string = $event.target.value;
            if (valor[valor.length - 1] === ' ') {
                valor = valor.substr(0, valor.length - 2);
            }
            this.onChange(valor);
            return;
        }
        this.aplicarMascara($event);
    }

    aplicarMascara($event: any) {
        const valor = $event.target.value;
        this.onChange(valor);

        $event.target.value = this.getValorComMascara(this.getLetrasNumeros(valor));
        return;
    }

    private getValorComMascara(valor: string): string {
        if (valor.length < 7) {
            return valor;
        } else if (valor.length >= 7 && valor.length < 10) {
            if (this.isLetra(valor[6])) {
                return valor;
            }
            return `${valor.substr(0, 6)} ${valor.substr(6, 3)}`;
        } else {
            if (this.isLetra(valor[6])) {
                if (this.isLetra(valor[10])) {
                    return valor;
                }
                return `${valor.substr(0, 10)} ${valor.substr(10, 4)}`;
            } else if (!this.isLetra(valor[6])) {
                if (this. isLetra(valor[9])) {
                    return `${valor.substr(0, 6)} ${valor.substr(6, 3)}${valor.substr(9, 5)}`;
                }
                return `${valor.substr(0, 6)} ${valor.substr(6, 3)} ${valor.substr(9, 5)}`;
            }
        }
    }

    private getLetrasNumeros(targetValue: string): string {
        return targetValue.replace(/[\W_]+/g, '');
    }

    private isLetra(valor: string): boolean {
        return /^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(valor);
    }

}
