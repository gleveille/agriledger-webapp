import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../services/user.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/of';
@Injectable()
export class AlreadyAuthenticatedGuard implements CanActivate {
    constructor(private userService:UserService,private router:Router){

    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.userService.isAuthenticated()) {
          console.log('navigating to dashboard')
          this.router.navigate(['/dashboard']);
          return false;

      }
      return true;
    }
}
