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
import {HttpErrorHandlerService} from "./http-error-handler.service";
import {UserService} from "./user.service";
@Injectable()
export class TokenService {

  constructor(private http:HttpClient,private errorHandler:HttpErrorHandlerService,private userService:UserService) { }


  getTokens(issuerName:string){
      let url;
      if(issuerName){
          url=`${TokenApi.getTokens.url()}?filter[where][issuerName]=${issuerName}&filter[include]=assetpool`;
      }
      else{
          url=`${TokenApi.getTokens.url()}?filter[include]=assetpool`;
      }
      return this.http.get(`${url}`)
          .catch((res) => {
          return this.errorHandler.handle(res);
          });

  }



    getAllTokensByAddressFromBlockchain(){
        const url=`${TokenApi.getTokensByAddressFromBlockchain.url()}`;
        return this.userService.user
            .concatMap((user: Iuser) => {
                return this.http.get(`${url}?address=${user.walletAddress}`);
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });

    }

  getAllTokensFromBlockchain(){
      const url=`${TokenApi.getAllTokensFromBlockchain.url()}`;
      return this.http.get(`${url}`)
          .catch((res) => {
              return this.errorHandler.handle(res);
          });

  }
}
