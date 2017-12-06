import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi,TokenApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/retry';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
import {UserService} from "./user.service";
@Injectable()
export class TokenService {

  constructor(private http:HttpClient,private errorHandler:ErrorHandlerService,private userService:UserService) { }


  getTokens(){
      const url=`${TokenApi.getTokens.url()}`;
      return this.userService.getUser()
          .concatMap((user: Iuser) => {
              return this.http.get(`${url}?address=${user.walletAddress}`);
          })
          .catch((res) => {
              return this.errorHandler.handle(res);
          });


  }
}
