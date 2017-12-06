import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateBalance'
})
export class TruncateBalancePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
