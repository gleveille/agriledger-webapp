import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../services/user.service";
import {Iuser} from "../interface/user.interface";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardAuthorizationGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const expectedRole:Array<string> = route.data.expectedRole;
      return this.userService.getUser()
          .map((user:Iuser)=>{
          if(user && expectedRole.includes(user.role)){
              if(user && !user.isPasswordChanged){
                  this.router.navigate(['/onboarding/password-reset']);
                  return false;
              }
              if(user && !user.isRegisteredOnBlockchain){
                  this.router.navigate(['/onboarding/account-activation']);
                  return false;
              }

              if(user && user.role==='sponsor' && !user.isIssuerOnBlockchain){
                  this.router.navigate(['/onboarding/issuer-registration']);
                  return false;
              }

              return true;
          }
          else{
              this.router.navigate(['/unauthorised']);
              return false;

          }
          })
          .catch(res => {
              return Observable.of(false);
          });

  }
}
