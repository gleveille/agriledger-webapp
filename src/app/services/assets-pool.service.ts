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
import {ErrorHandlerService} from "./error-handler.service";
import {UserService} from "./user.service";
@Injectable()
export class AssetsPoolService {

  selectedAssetsForPool:any[]=[];
  constructor(private http:HttpClient,private errorHandler:ErrorHandlerService) { }


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
          .retry(3)
          .catch((res) => {
              return this.errorHandler.handle(res);
          });


  }

}
