import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi, OnboardingApi, AssetApi,FavouriteAssetApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/forkJoin';

import 'rxjs/add/operator/share'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
import {UserService} from "./user.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AssetsService {
    private _assets: BehaviorSubject<any>=new BehaviorSubject({
        allAssets:[],
        pooledAssets:[],
        availableAssets:[],
        favouriteAssets:[]
    });
    private _stat: BehaviorSubject<any>=new BehaviorSubject({
        allAssetCount:0,
        pooledAssetCount:0,
        favouriteAssetCount:0,
        availableAssetCount:0
    });

    public assets: Observable<any>;
    public stat: Observable<any>;

    dataStore = {
        assets:{
            allAssets:[],
            pooledAssets:[],
            availableAssets:[],
            favouriteAssets:[]
        },
        stat:{
            allAssetCount:0,
            pooledAssetCount:0,
            favouriteAssetCount:0,
            availableAssetCount:0
        },
        metadata:{
            isStatLoaded:false,
            isAllAssetLoaded:false,
            isFavouriteAssetLoaded:false,
            isAvailableAssetLoaded:false
        }
    };

    categories:any[]=[];
    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private userService: UserService) {
        this.assets = this._assets.asObservable();
        this.stat = this._stat.asObservable();

    }

    loadAllAssets() {
        if(this.dataStore.metadata.isAllAssetLoaded){
            return Observable.of(this.dataStore.assets);
        }
        const url=`${AssetApi.getAssets.url()}?filter[include][user]=profiles`;
        return this.http.get(`${url}`)
            .do((assets:any[])=>{
                this.dataStore.metadata.isAllAssetLoaded=true;
                this.dataStore.assets.allAssets=assets;
                this._assets.next(this.deepCopy(this.dataStore.assets));
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    loadAvailableAssets() {
        if(this.dataStore.metadata.isAvailableAssetLoaded){
            return Observable.of(this.dataStore.assets);
        }
        const url=`${AssetApi.getAssets.url()}?filter[include]=user&filter[where][isPutOnBlockchain]=false`;
        return this.http.get(`${url}`)
            .do((assets:any[])=>{
                this.dataStore.metadata.isAvailableAssetLoaded=true;
                this.dataStore.assets.availableAssets=assets;
                this._assets.next(this.deepCopy(this.dataStore.assets));
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }


    loadStat(){
        if(this.dataStore.metadata.isStatLoaded){
            return Observable.of(this.dataStore.stat);
        }
        const url=`${AssetApi.getAssets.url()}/count`;
        const url2=`${AssetApi.getAssets.url()}/count?[where][isPutOnBlockchain]=true`;
        const url3=`${FavouriteAssetApi.getAssets.url()}/count?[where][userId]=${this.userService.dataStore.user.id}`;

        return Observable.forkJoin([
            this.http.get(`${url}`),
            this.http.get(`${url2}`),
            this.http.get(`${url3}`)])
            .do((t:any[])=>{
                this.dataStore.metadata.isStatLoaded=true;
                this.dataStore.stat.allAssetCount=t[0].count||0;
                this.dataStore.stat.pooledAssetCount=t[1].count||0;
                this.dataStore.stat.availableAssetCount=this.dataStore.stat.allAssetCount-this.dataStore.stat.pooledAssetCount;
                this.dataStore.stat.favouriteAssetCount=t[2].count||0;
                this._stat.next(this.deepCopy(this.dataStore.stat))
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });

    }

    loadFavouriteAssets(userId:string){
        if(this.dataStore.metadata.isFavouriteAssetLoaded){
            return Observable.of(this.dataStore.assets);
        }
        const url=`${FavouriteAssetApi.getAssets.url()}?filter[where][userId]=${userId}&filter[include]=asset`;
        return this.http.get(`${url}`)
            .do((assets:any[])=>{
            this.dataStore.metadata.isFavouriteAssetLoaded=true;
            this.dataStore.assets.favouriteAssets=assets;
            this._assets.next(this.deepCopy(this.dataStore.assets));
        }).catch((res) => {
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

    addAssetToFavourite(asset:any,userId:string){
        const url=`${FavouriteAssetApi.addToFavourite.url()}`;

        const data={assetId:asset.id,userId};
        return this.http.post(`${url}`,data)
            .do((created:any)=>{
            created.asset=asset;
                this.dataStore.assets.favouriteAssets.push(created);
                this._assets.next(this.deepCopy(this.dataStore.assets));
                this.dataStore.stat.favouriteAssetCount++;
                this._stat.next(this.dataStore.stat);
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    removeAssetFromFavourite(id:any){
        const url=`${FavouriteAssetApi.removeFromFavourite.url()}/${id}`;
        return this.http.delete(`${url}`).do(()=>{
            let i=-1;
            this.dataStore.assets.favouriteAssets.forEach((asset,index)=>{
                if(asset.id===id){
                    i=index;
                }
            })
            if(i>-1){
                this.dataStore.assets.favouriteAssets.splice(i,1);
                this._assets.next(this.deepCopy(this.dataStore.assets));
                this.dataStore.stat.favouriteAssetCount--;
                this._stat.next(this.dataStore.stat);
                console.log(this.dataStore.assets)
            }
        })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    private deepCopy(data){
        try{
           const copy= JSON.parse(JSON.stringify(data))
            return copy;
        } 
        catch (e){
            return data;
        }
    }
}

