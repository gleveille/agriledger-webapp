import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../services/user.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private userService:UserService,private router:Router){

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.userService.isAuthenticated()) {
          console.log('navigating to login')
          this.router.navigate(['/login']);
          return false;
      }
      return true;

    }
}
