import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../services/user.service";
import {Iuser} from "../interface/user.interface";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/of';
@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const expectedRole:Array<string> = route.data.expectedRole;
      console.log('expected role for this route is ',expectedRole)
      return this.userService.getUser()
          .map((user:any)=>{
          if(user && expectedRole.includes(user.role)){
              this.userService.user=user;
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
