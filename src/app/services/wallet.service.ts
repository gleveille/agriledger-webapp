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
import {HttpErrorHandlerService} from "./http-error-handler.service";
import {UserService} from "./user.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Iwallet} from "../interface/wallet.interface";

@Injectable()
export class WalletService {


    private _wallet: BehaviorSubject<Iwallet>=new BehaviorSubject({account:{}});
    wallet: Observable<Iwallet>;

    dataStore={} as Iwallet;

    constructor(private http: HttpClient, private errorHandler: HttpErrorHandlerService, private userService: UserService) {
        this.initDatastore();
        this.wallet=this._wallet.asObservable();
    }

    initDatastore(){
        this.dataStore={account:{},metadata:{isAccountLoaded:false}};
    }

    loadBlockchainAccount(walletAddress:string) {
        if(this.dataStore.metadata.isAccountLoaded){
            return Observable.of(this.dataStore);
        }
        return this.http.get(`${WalletApi.getAccount.url()}?address=${walletAddress}`)
            .do((account:any)=>{
            this.dataStore.account=account;
            this.dataStore.metadata.isAccountLoaded=true;
            this._wallet.next(this.dataStore)
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
            .do(()=>{
            console.log(txn.amount)
            if(this.dataStore.account.balance){
                this.dataStore.account.balance=this.dataStore.account.balance-txn.amount;
                this._wallet.next(this.dataStore);
            }
            })
            .catch((res) => {
                return this.errorHandler.handle(res);
            });
    }



}
