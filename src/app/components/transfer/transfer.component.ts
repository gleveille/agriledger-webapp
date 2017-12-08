import { Component, OnInit } from '@angular/core';
import {WalletService} from "../../services/wallet.service";
import {ToastService} from "../../services/toast.service";
import {TokenService} from "../../services/token.service";

import {Observable} from 'rxjs/observable'

import 'rxjs/add/operator/concatMap';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  user={} as Iuser;
  transferHttpRequestStatus='resolved';
  transaction:any={currency:'ACC',precision:6,fee:'0.01',toAddress:'',amount:'',remark:''};
    tokenRange:Array<any> = [];

  constructor(private walletService:WalletService,private tokenService:TokenService,
              private userService:UserService,
              private toastService:ToastService) { }

  ngOnInit() {


    this.userService.getUser().concatMap((user:Iuser)=>{
      this.user=user;
      return this.tokenService.getAllTokensFromBlockchain();
    }).subscribe((assets:any)=>{
        console.log(assets)
        this.tokenRange = assets;
          this.tokenRange.unshift({
              currency: "ACC",
              precision: 6
          });

      },(err)=> {
          console.log(err)

      })


  }
     getPrecision(currency){
        for( let i=0;i<this.tokenRange.length;i++){
            if(this.tokenRange[i].currency == currency){
                return this.tokenRange[i].precision;
            }
        }
    }

  transfer(){
      const isAddress = /^[0-9]{1,21}$/g;
      let currency;
      let precision =6;
      precision = this.transaction.currency === 'ACC' ? 6 : this.getPrecision(this.transaction.currency);

      console.log(precision)
      if(this.transaction.currency === undefined){
          this.toastService.error('Transfer','Invalid Amount');
      }else{
          currency = this.transaction.currency === 'ACC' ? null : this.transaction.currency;

      }
      if (!this.transaction.toAddress) {
          this.toastService.error('Transfer','Please enter recipient address');
          return false;
      }

      if (this.transaction.toAddress === this.user.walletAddress) {
          this.toastService.error('Transfer','Please choose different address other than yours');
          return false;
      }
      if (!this.transaction.amount || Number(this.transaction.amount) <= 0) {
          this.toastService.error('Transfer','Invalid Amount');
          return false;
      }
      const amount = parseFloat((this.transaction.amount * Math.pow(10,precision)).toFixed(0));

      const payload={toAddress:this.transaction.toAddress,amount:amount,currency:currency,remark:this.transaction.remark}

      this.transferHttpRequestStatus='pending';
      this.walletService.sendTransactions(payload).subscribe((result)=>{


        this.transaction.amount=null;
        this.transaction.remark=null;
        this.transaction.currency=null;

        this.transferHttpRequestStatus='resolved';
        this.toastService.success('Transfer','Successfully Tranferred');
      },(err)=>{
        console.log(err)
          this.transferHttpRequestStatus='rejected';
          this.toastService.error('Transfer',err.message);
      })
      //transaction = agrichainJS.transaction.createTransaction(String(this.transaction.toAddress),
      // amount.toString(), currency, this.transaction.remark,this.profile.privateKey, this.profile.secondPublicKey);

  }
}
