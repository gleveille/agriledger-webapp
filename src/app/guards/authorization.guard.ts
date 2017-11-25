import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../services/user.service";
import {Iuser} from "../interface/user.interface";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const expectedRole:Array<string> = route.data.expectedRole;
      console.log('inside authorization guard')
      console.log('expected role for this route is ',expectedRole)
      return this.userService.getUser()
          .map((user:Iuser)=>{
          console.log(user);
          if(user && expectedRole.includes(user.role)){
              this.userService.setUserFromGuard(user);
              if(user && !user.isPasswordChanged){
                  this.router.navigate(['/password-change']);
                  return false;
              }
              if(user && !user.isIssuerOnBlockchain){
                  this.router.navigate(['/account-activation']);
                  return false;
              }

              return true;
          }
              return false;
          })
          .catch(res => {
              console.log(res);
              return Observable.of(false);
          });

  }
}
