import { Injectable } from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi,OnboardingApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import {HttpClient} from "@angular/common/http";
@Injectable()
export class UserService {

  user={} as Iuser;
  constructor(private http:HttpClient) {
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
            return this.errorHandler(res);
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
                return this.errorHandler(res);
            });
    }

    errorHandler(res:any):Observable<any>{
      console.log(res);
      let msg='';
      if(res.error){
        try{
          const data=JSON.parse(res.error);
          console.log(data)
          if(data && data.message){
              msg=data.message;

          }
        }

        catch(err) {
        }
      }
      else{

          msg=res.statusText||'Server error.Try again';
      }

      msg= msg ? msg :'Something went wrong';

      console.log(msg);
        return Observable.throw({message:msg,status:res.status});

    }
}
