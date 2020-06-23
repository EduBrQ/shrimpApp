import { Injectable } from '@angular/core';

@Injectable()
export class HttpUtilsService {

  /**
   * Metodo para mapear um objeto qualquer para um HttpParams, com base nos atributos.
   * @param objeto Objeto para mapeamento
   */
  httpParamsByObjeto(objeto: Object): {
    [param: string]: string | string[]
  } {
    const httpParams: {
      [param: string]: string | string[];
    } = {};
    if (objeto != null) {
      // tslint:disable-next-line:forin
      for (const key in objeto) {
        const parametro = objeto[key];
        if (parametro !== null && parametro !== 'null' && parametro !== 'undefined' && parametro !== undefined) {
          if (String(parametro).trim()) {
            httpParams[key] = String(objeto[key]);
          }
        }
      }
    }
    return httpParams;
  }
}
