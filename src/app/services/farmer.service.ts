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
export class FarmerService {

    user={} as Iuser;
    farmers:any[]=[];
    constructor(private http:HttpClient,private errorHandler:ErrorHandlerService) {


    }



}
