import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[appCepDirective]' })
export class CepDirective {
    digitosAceitosRegex = /[^0-9.-]/;
    private digitosEspeciais = [8, 37, 39, 46, 17];
    constructor() { }

    private verificar(event: any) {
        if (!this.digitosEspeciais.includes(event.keyCode)) {
            return this.validarDigito(event.key);
        }
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        this.verificar($event);
    }

    validarDigito(key): boolean {
        return !this.digitosAceitosRegex.test(key);
    }

    @HostListener('keydown', ['$event'])
    onKeydown($event: any) {
        this.verificar($event);
    }
}
