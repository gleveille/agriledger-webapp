import { Injectable } from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi, OnboardingApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/retry';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
@Injectable()
export class UserService {

  user={} as Iuser;
  constructor(private http:HttpClient,private errorHandler:ErrorHandlerService) {
    console.log('access token is',localStorage.getItem('accessToken') ,'userId is ',localStorage.getItem('userId'));
  }

  login(user:Iuser){
    return this.http.post(`${UserApi.login.url()}?include=User`,user)
        .do((res:any)=>{
      this.saveAccessToken(res.id);
      this.saveUserId(res.user.id);
      this.user=res.user;
      console.log('inside do');
      console.log(res);
    }).catch((res)=> {
            return this.errorHandler.handle(res);
        });
  }

  register(user:Iuser){
        return this.http.post(`${UserApi.register.url()}`,user)
            .catch((res)=> {
                return this.errorHandler.handle(res);
            });
  }

  saveAccessToken(accessToken:string){
      localStorage.setItem('accessToken', accessToken);
  }
  getAccessToken(){
    return localStorage.getItem('accessToken');


  }

  saveUserId(userId:string){
      localStorage.setItem('userId', userId);
  }
  getUserId(){
      return localStorage.getItem('userId');


  }



  isAuthenticated(){
    if(this.getUserId() && this.getAccessToken()){
        return true;

    }
    return false;
  }

  getUser(){
    // first time ,this method will be called from authorization guard
    console.log(this.user)
    if(this.user && this.user.id){
      console.log('from cache')
      return Observable.of(this.user);
    }
      return this.http.get(`${UserApi.findById.url()}/${this.getUserId()}`);
  };



    getUsers(){

        return this.http.get(`${UserApi.list.url()}`)
            .catch((res)=> {
                return this.errorHandler.handle(res);
            })
    };


    setUserFromGuard(user:Iuser){
    this.user=user;
  }
  resetPassword(oldPassword:string,newPassword:string) {
      return this.http.post(`${UserApi.changePassword.url()}`,
          {oldPassword:oldPassword,newPassword:newPassword}).do((data)=>{
          this.user.isPasswordChanged=true;
      }).catch((res)=> {
          return this.errorHandler.handle(res);
      });
  };

    changePassword(oldPassword:string,newPassword:string) {
        return this.http.post(`${UserApi.changePassword.url()}`,
            {oldPassword:oldPassword,newPassword:newPassword}).do((data)=>{
        }).catch((res)=> {
            return this.errorHandler.handle(res);
        });
    };


    logout(){
        return this.http.post(`${UserApi.logout.url()}`,
            {}).do((data)=>{
          this.resetState();
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userId');

        });
    }

    resetState(){
      this.user={};
    }

    createAccountOnBlockchain(){
        return this.http.post(`${OnboardingApi.createAccount.url()}`,
            {userId:this.user.id})
            .do((data:any)=>{
            this.user.isRegisteredOnBlockchain=true;
            this.user.walletAddress=data.walletAddress;
            this.user.publicKey=data.publicKey;

            })
            .catch((res)=> {
                return this.errorHandler.handle(res);
            });
    }

    getUsersByRole(role:string){
      if(!role){
        return Observable.throw('Role is not found');
      }
        return this.http.get(`${UserApi.list.url()}?filter[where][role]=${role}`)
            .do((farmers:any)=>{
                console.log(farmers);
            })
            .catch((res)=> {
                return this.errorHandler.handle(res);
            });
    }


    getUsersByOnboardingStatus(status:string){
        if(!status){
            return Observable.throw('status is not found');
        }

        let url;

        if(status==='isPasswordChanged'){
            url=`${UserApi.list.url()}?filter[where][isPasswordChanged]=true&filter[where][isRegisteredOnBlockchain]=false`;
        }

        if(status==='isRegisteredOnBlockchain'){
            url=`${UserApi.list.url()}?filter[where][isRegisteredOnBlockchain]=true&filter[where][isIssuerOnBlockchain]=false`;
        }
        if(status==='isIssuerOnBlockchain'){
            url=`${UserApi.list.url()}?filter[where][isIssuerOnBlockchain]=true`;
        }
        return this.http.get(`${url}`)
            .do((farmers:any)=>{
                console.log(farmers);
            })
            .catch((res)=> {
                return this.errorHandler.handle(res);
            });
    }


    getBlockchainAccountDuringOnboarding(){

        console.log('user is')
        console.log(this.user)
        return Observable.interval(1000)
            .concatMap((val:any)=>{
            console.log(val)
                return this.http.get(`${OnboardingApi.getAccount.url()}?address=${this.user.walletAddress}`);
            })
            .retry(3)
            .catch((res)=> {
                return this.errorHandler.handle(res);
            });
    }

    resgisterAsIssuer(issuer:{name:string,description:string}){
        return this.http.post(`${OnboardingApi.resgisterIssuer.url()}`,issuer).do((data)=>{
            console.log(data)
            this.user.isIssuerOnBlockchain=true;
            this.user.issuerName=name;
        }).catch((res)=> {
            return this.errorHandler.handle(res);
        });
    }


}
