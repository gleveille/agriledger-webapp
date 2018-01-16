import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi, OnboardingApi, AssetApi,FavouriteAssetApi} from '../api.config';
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
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()
export class AssetsService {
    private _favouriteAssets: BehaviorSubject<any>;
    favouriteAssets: Observable<any>;

    dataStore = { assets:[],favouriteAssets:[] };

    categories:any[]=[];
    assets:any[]=[];
    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private userService: UserService) {
        this._favouriteAssets = <BehaviorSubject<Iuser>>new BehaviorSubject([]);
        this.favouriteAssets = this._favouriteAssets.asObservable();

    }

    getAllAssets() {

        const url=`${AssetApi.getAssets.url()}?filter[include][user]=profiles`;

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
        const url=`${AssetApi.getAssets.url()}/${assetId}?filter[include][user]=profiles`;

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

    loadFavouriteAssets(userId:string){
        const url=`${FavouriteAssetApi.getAssets.url()}?filter[where][userId]=${userId}&filter[include]=asset`;

        this.http.get(`${url}`).do((assets:any[])=>{
            console.log('fav assets are')
            console.log(assets)
            this.dataStore.favouriteAssets=assets;
            this._favouriteAssets.next(this.dataStore.favouriteAssets);
        }).subscribe(()=>{

        },(err)=>{

        })
    }
    addAssetToFavourite(assetId:any,userId:string){
        const url=`${FavouriteAssetApi.addToFavourite.url()}`;

        const data={assetId,userId};
        return this.http.post(`${url}`,data)
            .do((asset:any)=>{
                console.log('fav assets are')
                console.log(asset)
                this.dataStore.favouriteAssets.push(asset);
                this._favouriteAssets.next(this.dataStore.favouriteAssets);
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    removeAssetFromFavourite(id:any){
        const url=`${FavouriteAssetApi.removeFromFavourite.url()}/${id}`;
        return this.http.delete(`${url}`)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }
}
