import { Injectable } from '@angular/core';
import { SimNaoEnum } from '@shared/models/enum/sim-nao.enum';

@Injectable()
export class EnumUtilsService {
  enumToArray<T>(enumObj: Object): T[] {
    const array: T[] = [];
    // tslint:disable-next-line:forin
    for (const test in enumObj) {
      array.push(enumObj[test]);
    }
    return array;
  }

  booleanToSimNaoEnum(valor: boolean): SimNaoEnum {
    return valor === true ? SimNaoEnum.S : SimNaoEnum.N;
  }
}
