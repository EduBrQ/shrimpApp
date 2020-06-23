import { Injectable } from '@angular/core';
import { SessionStorageKeyEnum } from 'src/app/shared/shared-models/enum/session-storage-key.enum';

@Injectable()
export class SessionStorageService {

    recuperarValor<T>(chave: SessionStorageKeyEnum): T {
        if (sessionStorage.getItem(chave) != null) {
            return JSON.parse(
                atob(sessionStorage.getItem(chave) || null)
            );
        }
        return null;
    }

    salvarValor(chave: SessionStorageKeyEnum, objeto: any) {
        if (objeto != null) {
            sessionStorage.setItem(chave, btoa(JSON.stringify(objeto)));
        }
    }

    limparValores(chave: SessionStorageKeyEnum[]) {
        chave.forEach(key => {
            sessionStorage.removeItem(key);
        });
    }

    limparSessao() {
        sessionStorage.clear();
    }
}
