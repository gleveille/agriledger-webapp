import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import {UserService} from "../services/user.service";

import 'rxjs/add/observable/of';
import {Iuser} from "../interface/user.interface";

@Injectable()
export class AlreadyHaveBlockchainGuard implements CanActivate {

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
                    if(user && user.isIssuerOnBlockchain){
                        this.router.navigate(['/dashboard']);
                        return false;
                    }

                    return true;
                }
                this.router.navigate(['/dashboard']);

                return false;
            })
            .catch(res => {
                console.log(res);
                this.router.navigate(['/dashboard']);
                return Observable.of(false);
            });

    }
}
