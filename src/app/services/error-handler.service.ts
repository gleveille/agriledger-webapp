import { Injectable } from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi,OnboardingApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {HttpClient} from "@angular/common/http";
@Injectable()
export class ErrorHandlerService {

  constructor() { }


  handle(res:any):Observable<any>{
      console.log(res);
      let msg='';
      if(res.error){
          try{
              const data=JSON.parse(res.error);
              console.log(data)
              if(data && data.error && data.error.message){
                  msg=data.error.message;

              }else{
                  if(data && data.message){
                      msg=data.message;
                  }
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
