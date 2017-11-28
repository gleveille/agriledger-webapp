import { Injectable } from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi,OnboardingApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
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
      return this.http.get(`${UserApi.findById.url()}/${localStorage.getItem('userId')}`);
  };

  setUserFromGuard(user:Iuser){
    this.user=user;
  }


    changePassword(oldPassword:string,newPassword:string)
    {
        return this.http.post(`${UserApi.changePassword.url()}`,
            {oldPassword:oldPassword,newPassword:newPassword}).do((data)=>{
          this.user.isPasswordChanged=true;
        })
        .catch((res)=> {
            return this.errorHandler.handle(res);
        });

    }

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
            {userId:this.user.id}).do((data)=>{
            this.user.isRegisteredOnBlockchain=true;
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

}
