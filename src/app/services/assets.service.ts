import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi, OnboardingApi, AssetApi} from '../api.config';
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
export class AssetsService {

    categories:any[]=[];
    assets:any[]=[];
    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private userService: UserService) {
    }

    getAllAssets() {

        let url=`${AssetApi.getAssets.url()}?filter[include]=user`;

        return this.http.get(`${url}`)
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    getNonPooledAssets() {

        let url=`${AssetApi.getAssets.url()}?filter[include]=user&filter[where][isPutOnBlockchain]=false`;

        return this.http.get(`${url}`)
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }
    getAssetsByCategoryId(categoryId:string,isPutOnBlockchain:boolean=false) {


      const url=`${AssetApi.getAssets.url()}?filter[where][categoryId]=${categoryId}&filter[where][isPutOnBlockchain]=${isPutOnBlockchain}&filter[include]=user`;

        return this.http.get(`${url}`)
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }


    getAssetByid(assetId:string){
        const url=`${AssetApi.getAssets.url()}/${assetId}?filter[include]=user`;

        return this.http.get(`${url}`)
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    updateAsset(asset:any){
        const url=`${AssetApi.getAssets.url()}/${asset.id}`;

        return this.http.put(`${url}`,asset)
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }



    getCategories(level:number){
        const url=`${AssetApi.getCategories.url()}?level=${level}`;


        return this.http.get(`${url}`).do((categories:any[])=>{
            this.categories=categories;
        })
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }
}
