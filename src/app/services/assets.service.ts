import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi, OnboardingApi, AssetApi,FavouriteAssetApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/publishLast'
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

    dataStore = { assets:[],favouriteAssets:[],stat:{allAssetCount:0,pooledAssetCount:0} };

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
        const url=`${AssetApi.getAssets.url()}?filter[include]=user&filter[where][isPutOnBlockchain]=false`;

        return this.http.get(`${url}`)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    getAllAssetCount(){
        const url=`${AssetApi.getAssets.url()}/count`;

        return this.http.get(`${url}`)
            .map((data:any)=>data.count)
            .do((count)=>{
                console.log('all asset count is ',count)

                this.dataStore.stat.allAssetCount=count;
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }


    getPooledAssetCount(){
        const url=`${AssetApi.getAssets.url()}/count?[where][isPutOnBlockchain]=true`;

        return this.http.get(`${url}`)
            .map((data:any)=>data.count)
            .do((count)=>{
            console.log('pooled asset count is ',count)
                this.dataStore.stat.pooledAssetCount=count;
            })
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
        return this.http.get(`${url}`).map((assets:any[])=>{
            console.log('fav assets are')
            console.log(assets)
            if(!Array.isArray(assets)){
                assets=[];
            }
            this.dataStore.favouriteAssets=assets;
            this._favouriteAssets.next(this.dataStore.favouriteAssets);
        }).publishLast().refCount().catch((err)=>{
            return this.errorHandler.handle(err);
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
        return this.http.delete(`${url}`).do(()=>{
            let i=-1;
            this.dataStore.favouriteAssets.forEach((asset,index)=>{
                if(asset.id===id){
                    i=index;
                }
            })
            if(i>-1){
                this.dataStore.favouriteAssets.splice(i,1);
                this._favouriteAssets.next(this.dataStore.favouriteAssets);
            }
        })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }
}
