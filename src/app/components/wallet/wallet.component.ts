import { Component, OnInit } from '@angular/core';
import {WalletService} from "../../services/wallet.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
import {Iwallet} from "../../interface/wallet.interface";

import {concatMap} from 'rxjs/operator/concatMap'

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

    account={} as any;
    user={} as Iuser;
    transactions:any[]=[];
    txnRequestStatus:string='resolved';
    accountRequestStatus:string='resolved';

    constructor(private walletService:WalletService,
                private userService:UserService,
                private router:Router,private toastService:ToastService) { }

    ngOnInit() {
        this.walletService.wallet.subscribe((data:Iwallet)=>{
            this.account=data.account;
        });



        this.userService.user.concatMap((user:Iuser)=>{
            this.user=user;
            console.log(this.user)
            this.txnRequestStatus='pending';
            return this.walletService.getTransactions(user.publicKey,user.walletAddress)
        }).subscribe((txn:any[])=>{
            this.txnRequestStatus='resolved';
            this.transactions=txn;
        },(err)=>{
            this.txnRequestStatus='rejected';

        })


    }



}
