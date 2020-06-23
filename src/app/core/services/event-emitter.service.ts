import { EventosGlobaisEnum } from './siurbe/model/eventos-globais.enum';
import { EventEmitter } from '@angular/core';

export class EventEmitterService {
  private static emitters: {
    [nomeEvento: string]: EventEmitter<any>;
  } = {};

  public static get<T>(nomeEvento: EventosGlobaisEnum | any): EventEmitter<T> {
    if (!this.emitters[nomeEvento]) {
      this.emitters[nomeEvento] = new EventEmitter<T>();
    }
    const evento: EventEmitter<T> = this.emitters[nomeEvento];
    return evento;
  }
}
