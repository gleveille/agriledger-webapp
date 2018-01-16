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
        }
    };

    categories:any[]=[];
    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private userService: UserService) {
        this.assets = this._assets.asObservable();
        this.stat = this._stat.asObservable();

    }

    loadAllAssets() {
        const url=`${AssetApi.getAssets.url()}?filter[include][user]=profiles`;
        this.http.get(`${url}`)
            .retry(3)
            .subscribe((assets:any[])=>{
                this.dataStore.assets.allAssets=assets;
                this._assets.next(this.deepCopy(this.dataStore.assets));
            },(err)=>{

            })
    }

    loadAvailableAssets() {
        const url=`${AssetApi.getAssets.url()}?filter[include]=user&filter[where][isPutOnBlockchain]=false`;
        this.http.get(`${url}`)
            .subscribe((assets:any[])=>{
                this.dataStore.assets.availableAssets=assets;
                this._assets.next(this.deepCopy(this.dataStore.assets));
            },(err)=>{

            })
    }


    loadStat(){
        const url=`${AssetApi.getAssets.url()}/count`;
        const url2=`${AssetApi.getAssets.url()}/count?[where][isPutOnBlockchain]=true`;
        Observable.forkJoin([
            this.http.get(`${url}`),
            this.http.get(`${url2}`)])
            .subscribe((t:any[])=> {
            this.dataStore.stat.allAssetCount=t[0].count||0;
            this.dataStore.stat.pooledAssetCount=t[1].count||0;
            this.dataStore.stat.availableAssetCount=this.dataStore.stat.allAssetCount-this.dataStore.stat.pooledAssetCount;
            this._assets.next(this.deepCopy(this.dataStore.stat))
        });
    }

    loadFavouriteAssets(userId:string){
        const url=`${FavouriteAssetApi.getAssets.url()}?filter[where][userId]=${userId}&filter[include]=asset`;
        return this.http.get(`${url}`).map((assets:any[])=>{
            this.dataStore.assets.favouriteAssets=assets;
            this.dataStore.stat.favouriteAssetCount=assets.length;
            this._assets.next(this.deepCopy(this.dataStore.assets));
            this._stat.next(this.deepCopy(this.dataStore.stat));
        }).subscribe(()=>{

        },(err)=>{

        })
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

    addAssetToFavourite(assetId:any,userId:string){
        const url=`${FavouriteAssetApi.addToFavourite.url()}`;

        const data={assetId,userId};
        return this.http.post(`${url}`,data)
            .do((asset:any)=>{
                this.dataStore.assets.favouriteAssets.push(asset);
                this._assets.next(this.deepCopy(this.dataStore.assets));
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

