import { Directive, forwardRef, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
    selector: '[appDuasCasasDecimais]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DuasCasasDecimaisMaskDirective),
        multi: true
    }]
})
export class DuasCasasDecimaisMaskDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;
    value: any;
    private numericoPonto: StringMask;
    // private numericoVirgula: StringMask;

    constructor(private elementRef: ElementRef) {
        this.numericoPonto = new StringMask('.00');
        // this.numericoVirgula = new StringMask(',00');
    }
    writeValue(value: any): void {
        if (String(value).indexOf('.') === -1 && value !== '') {
            value += '.00';
        }
        this.elementRef.nativeElement.value = value;
        this.value = value;
        if (this.onChange != null) {
            this.onChange(value);
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        const valor = $event.target.value.replace(/[a-z|A-Z|"!@#$%¨&*()/*-+:?><|¹²³£¢¬_{}^`´~;ª,º°§]/g, '');
        $event.target.value = valor;
        const valorAposPonto = valor.split('.');
        if (valorAposPonto[1]) {
            valorAposPonto[1] = this.numericoPonto.apply(valorAposPonto[1]);
            $event.target.value = valorAposPonto[0] + valorAposPonto[1];
            this.onChange($event.target.value);
        } else {
            this.onChange($event.target.value);
        }
        return;
    }

}
