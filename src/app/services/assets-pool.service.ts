import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi,AssetPoolApi} from '../api.config';
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
export class AssetsPoolService {

  selectedAssetsForPool:any[]=[];
  constructor(private http:HttpClient,private userService:UserService,private errorHandler:HttpErrorHandlerService) { }


  addAssetInPool(assets:any[]){
    this.selectedAssetsForPool=assets;
  }

  getSelectedAssetsForPool(){

    return this.selectedAssetsForPool;
  }

  createAssetPool(assetPool){
    console.log(assetPool)
      const url=`${AssetPoolApi.createAssetpool.url()}`;

      return this.http.post(`${url}`,assetPool)
          .catch((res) => {
              return this.errorHandler.handle(res);
          });


  }

  removeAllAssetFromPool(){
    this.selectedAssetsForPool=[];
  }

  getPoolById(poolId:string){

      const url=`${AssetPoolApi.getAssetpool.url()}/${poolId}`;

      return this.http.get(`${url}`)
          .catch((res) => {
              return this.errorHandler.handle(res);
          });

  }

  getPools(issuerName:string){
      let url;
      if(issuerName){
          url=`${AssetPoolApi.getAssetpool.url()}?filter[where][issuerName]=${issuerName}`;

      }
      else{
          url=`${AssetPoolApi.getAssetpool.url()}`;
      }
      return this.http.get(`${url}`)
          .catch((res) => {
              return this.errorHandler.handle(res);
          });

  }



  issueToken(userId,assetPoolId,amount,exchangeRate,precision,currency){
      const url=`${AssetPoolApi.issueToken.url()}`;

      return this.http.post(`${url}`,{userId,assetPoolId,amount,precision,exchangeRate,currency})
          .catch((res) => {
              return this.errorHandler.handle(res);
          });
  }
  getAssetPoolInfoFromBlockchain(assetName:string){
      const url=`${AssetPoolApi.getAssetpoolInfoFromBlockchain.url()}?assetName=${assetName}`;

      return this.http.get(`${url}`)
          .catch((res) => {
          return  Observable.of({});
              //return this.errorHandler.handle(res);
          });
  }

    getTokensByAssetPoolId(assetPoolId:string){
        const url=`${AssetPoolApi.getAssetpool.url()}/${assetPoolId}/tokens?filter[include]=assetpool`;
        return this.http.get(`${url}`)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });

    }

}
