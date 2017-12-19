import { Pipe, PipeTransform } from '@angular/core';
import {Iuser} from "../interface/user.interface";

@Pipe({
  name: 'onboardingStatus'
})
export class OnboardingStatusPipe implements PipeTransform {

  transform(user: Iuser, args?: any): any {

    if(!user || !user.role ){
      return '';
    }
    switch (user.role){
        case 'ops':{
            if(user.isIssuerOnBlockchain){
                return 'Completed'
            }
            else if(user.isRegisteredOnBlockchain){
                return 'Account created'
            }
            else if(user.isPasswordChanged){
              return 'Password changed'
            }
            else{
              return 'Pending'
            }
        }

        case 'sponsor':{

            if(user.isIssuerOnBlockchain){
                return 'Completed'
            }
            else if(user.isRegisteredOnBlockchain){
                return 'Account created'
            }
            else if(user.isPasswordChanged){
                return 'Password changed'
            }
            else{
                return 'Pending'
            }
        }
        case 'farmer':{
          if(user.isPasswordChanged){
            return 'Completed'
            }
          else{
            return 'Pending'
          }
        }
        default:{
          return '';
        }
    }

  }

}
