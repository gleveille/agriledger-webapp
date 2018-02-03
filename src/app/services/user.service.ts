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
import {HttpErrorHandlerService} from "./http-error-handler.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()
export class UserService {

    private _user: BehaviorSubject<Iuser>;
    dataStore:any;

    user: Observable<Iuser>;


  constructor(private http:HttpClient,private errorHandler:HttpErrorHandlerService) {
      this.initDatastore();
      this._user = <BehaviorSubject<Iuser>>new BehaviorSubject({});
      this.user = this._user.asObservable();

  }


    initDatastore(){
      this.dataStore={user:{},otherUsers:[] }
  }
  login(user:Iuser){
    return this.http.post(`${UserApi.login.url()}?include=User`,user)
        .do((res:any)=>{
      this.saveAccessToken(res.id);
      this.saveUserId(res.user.id);
      this.dataStore.user=res.user;
      if(!this.dataStore.user.profiles){
          this.dataStore.user.profiles={};
      }
      this._user.next(JSON.parse(JSON.stringify(this.dataStore.user)));

    }).catch((res)=> {
            return this.errorHandler.handle(res);
        });
  }

  register(user:Iuser){
        return this.http.post(`${UserApi.register.url()}`,user).concatMap((newUser:any)=>{
            return this.http.get(`${UserApi.getProfile.url()}/${newUser.id}/profiles`)
        })
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
  getUserIdFromStorage(){
      return localStorage.getItem('userId');


  }

  isAuthenticated(){
    if(this.getUserIdFromStorage() && this.getAccessToken()){
        return true;

    }
    return false;
  }

  getUser(){
    // first time ,this method will be called from authorization guard

      return this.http.get(`${UserApi.findById.url()}/${this.getUserIdFromStorage()}?filter[include]=profiles`).do((user:Iuser)=>{

          console.log('user from server is')
          console.log(user)
          this.dataStore.user=user;
          if(!this.dataStore.user.profiles){
              this.dataStore.user.profiles={};
          }
          this._user.next(JSON.parse(JSON.stringify(this.dataStore.user)));
      })
  };


    profilePicChanged(data:any){
        this.dataStore.user.profiles.profileUrl=data;
        this._user.next(JSON.parse(JSON.stringify(this.dataStore.user)));
    }
    updateProfile(user:Iuser) {

        const isMineProfile=user.profiles.userId===this.dataStore.user.id;
        const profiles=user.profiles;
        console.log('updating profile is')
        console.log(profiles)
        return this.http.put(`${UserApi.updateProfile.url()}/${user.id}/profiles`, profiles).do((profile:any)=> {
            if(isMineProfile){
                this.dataStore.user.profiles=profile;
                this._user.next(JSON.parse(JSON.stringify(this.dataStore.user)));
            }

            console.log('updated')
            console.log(this.dataStore.user)
        })
            .catch((err)=> {

                return this.errorHandler.handle(err);
            })

    };


    getUsers(){
        return this.http.get(`${UserApi.list.url()}?filter[include]=profiles&filter[order]=createdAt DESC`).do((users:Iuser[])=>{
            this.dataStore.otherUsers=users;
        })
            .catch((res)=> {
                return this.errorHandler.handle(res);
            })
    };


    getUserById(userId:string){
        this.dataStore.otherUsers.forEach((user)=>{
            if(user && user.id===userId){
                return Observable.of(user)
            }
        })

        return this.http.get(`${UserApi.list.url()}/${userId}?filter[include]=profiles`).catch((res)=> {
            return this.errorHandler.handle(res);
        })
    }

    sendPasswordResetToken(email:any) {
        return this.http.post(`${UserApi.sendResetPasswordToken.url()}`, {email: email}).do((res)=> {
        })
            .catch((err)=> {
                return this.errorHandler.handle(err);
            })
    };

    resetPassword(accessToken:string, newPassword:string) {
        return this.http.post(`${UserApi.resetPassword.url()}?access_token=${accessToken}`,
            {newPassword: newPassword}).do((data)=> {
        }).catch((res)=> {
            return this.errorHandler.handle(res);
        });
    };
    changePassword(oldPassword:string,newPassword:string) {
        return this.http.post(`${UserApi.changePassword.url()}`,
            {oldPassword:oldPassword,newPassword:newPassword}).do((data)=>{
            this.dataStore.user.isPasswordChanged=true;
            this._user.next(JSON.parse(JSON.stringify(this.dataStore.user)));


        }).catch((res)=> {
            return this.errorHandler.handle(res);
        });
    };


    logout(){
        return this.http.post(`${UserApi.logout.url()}`,
            {}).do((data)=>{
          this.resetLocalStorage();

        });
    }


    resetLocalStorage(){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
    }

    createAccountOnBlockchain(){
        return this.http.post(`${OnboardingApi.createAccount.url()}`,
            {userId:this.dataStore.user.id})
            .do((data:any)=>{
            this.dataStore.user.isRegisteredOnBlockchain=true;
            this.dataStore.user.walletAddress=data.walletAddress;
            this.dataStore.user.publicKey=data.publicKey;
                this._user.next(JSON.parse(JSON.stringify(this.dataStore.user)));

            })
            .catch((res)=> {
                return this.errorHandler.handle(res);
            });
    }

    getUsersByRole(role:string){
      if(!role){
        return Observable.throw('Role is not found');
      }
        return this.http.get(`${UserApi.list.url()}?filter[where][role]=${role}&filter[order]=createdAt DESC`)
            .do((farmers:any)=>{
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

        return Observable.interval(1000)
            .concatMap((val:any)=>{
                return this.http.get(`${OnboardingApi.getAccount.url()}?address=${this.dataStore.user.walletAddress}`);
            })
            .retry(3)
            .catch((res)=> {
                return this.errorHandler.handle(res);
            });
    }

    resgisterAsIssuer(issuer:{name:string,description:string}){
        return this.http.post(`${OnboardingApi.resgisterIssuer.url()}`,issuer).do((data)=>{
            this.dataStore.user.isIssuerOnBlockchain=true;
            this.dataStore.user.issuerName=issuer.name;
            this._user.next(JSON.parse(JSON.stringify(this.dataStore.user)));

        }).catch((res)=> {
            return this.errorHandler.handle(res);
        });
    }


}
