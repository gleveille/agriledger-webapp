import {Injectable} from '@angular/core';
import {Iuser} from "../interface/user.interface";
import {UserApi, OnboardingApi, WalletApi} from '../api.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/retry';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
import {UserService} from "./user.service";

@Injectable()
export class WalletService {

    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private userService: UserService) {
    }


    getBlockchainAccount() {
        return this.userService.user
            .concatMap((user: Iuser) => {
                return this.http.get(`${WalletApi.getAccount.url()}?address=${user.walletAddress}`);
            })
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }


    getTransactions(senderPublicKey:string,recipientId:string) {
        return this.http.get(`${WalletApi.getTransaction.url()}?senderPublicKey=${senderPublicKey}&recipientId=${recipientId}`)
            .retry(3)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }


    sendTransactions(txn:any) {
        return this.http.post(`${WalletApi.sendTransaction.url()}`,txn)
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }



}
