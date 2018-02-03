import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {AddressApi} from '../api.config';
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
import {HttpErrorHandlerService} from "./http-error-handler.service";
import {UserService} from "./user.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AddressService {

    private datastore={country:[],province:{},city:{},district:{}};

  constructor(private http:HttpClient, private errorHandler: HttpErrorHandlerService) { }


    getCountry(){
        const url=`${AddressApi.getCountry.url()}`;

        if(this.datastore.country.length){
            return Observable.of(this.datastore.country.slice());
        }
        return this.http.get(`${url}`)
            .retry(3)
            .do((data:any[])=>{
            this.datastore.country=data||[];
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }


    getProvinceByCountry(countryName:string){
        if(this.datastore.province[countryName] && this.datastore.province[countryName].length ){
            return Observable.of(this.datastore.province[countryName].slice());
        }
        const url=`${AddressApi.getProvince.url()}?filter[where][country]=${countryName}`;

        return this.http.get(`${url}`)
            .retry(3)
            .do((data:any[])=>{
                this.datastore.province[countryName]=data||[];
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    getCityByProvince(provinceName:string){
        const url=`${AddressApi.getCity.url()}?filter[where][province]=${provinceName}`;

        if(this.datastore.city[provinceName] && this.datastore.city[provinceName].length ){
            return Observable.of(this.datastore.city[provinceName].slice());
        }
        return this.http.get(`${url}`)
            .retry(3)
            .do((data:any[])=>{
                this.datastore.city[provinceName]=data||[];
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }

    getDistrictByCity(cityName:string){
        const url=`${AddressApi.getDistrict.url()}?filter[where][city]=${cityName}`;

        if(this.datastore.district[cityName] && this.datastore.district[cityName].length ){
            return Observable.of(this.datastore.district[cityName].slice());
        }

        return this.http.get(`${url}`)
            .retry(3)
            .do((data:any[])=>{
                this.datastore.district[cityName]=data||[];
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }


}
