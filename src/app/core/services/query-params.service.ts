import { Injectable } from '@angular/core';
/**
 * @author Sérgio Davi Marinho
 * Serviço responsável por executar tarefas para facilitar a transferencia entre paginas na aplicação.
 */
@Injectable()
export class QueryParamsService {

    constructor() { }

    /**
     * Transforma um objeto especifico, para uma string em base64.
     * @param objQuery Objeto que deseja transferir entre as paginas
     */
    objectToStringParam<T>(objQuery: T): string {
        return btoa(JSON.stringify(objQuery));
    }

    /**
     * Transforma uma string base64 para um Objeto especifico.
     * @param base64Str String em base64 pra decodificar e transformar em objeto.
     */
    paramStringToEspecificObject<T>(base64Str: string): T {
        return JSON.parse(atob(base64Str));
    }

}
