import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'metragem'
})
export class MetragemPipe implements PipeTransform {
  transform(value: any): any {
    if(value){
    value = value.toString().replace('.', ',');
    value = value % 1 === 0 ? value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').concat(',00')
      : value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    return value;
  }
}
