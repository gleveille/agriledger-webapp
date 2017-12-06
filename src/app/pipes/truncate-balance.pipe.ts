

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateBalance',
})
export class TruncateBalancePipe implements PipeTransform {

    transform(val: string, ...args) {
        let amount:number;
        console.log(val,args[0])
        if(val){
            try{
                amount=parseInt(val,10);
                amount=amount/Math.pow(10, args[0]);
                return amount;
            }
            catch (err){
                return null;
            }
        }
        else
            return null;

    }
}

