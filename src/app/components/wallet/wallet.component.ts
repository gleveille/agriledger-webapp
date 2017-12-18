import { Component, OnInit } from '@angular/core';
import {WalletService} from "../../services/wallet.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";

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
        this.getUser()
  }


  getUser(){
        this.userService.getUser().subscribe((user:Iuser)=>{
            this.user=user;
            if(user && user.publicKey && user.walletAddress){
                this.getAccount();
                this.getTransactions(user.publicKey,user.walletAddress)
            }

        },(err)=>{

        })
  }
  getTransactions(senderPublicKey:string,recipientId:string){
      if(!senderPublicKey || !recipientId){
          return;
      }
      this.txnRequestStatus='pending';

      this.walletService.getTransactions(senderPublicKey,recipientId).subscribe((txn:any[])=>{
          this.txnRequestStatus='resolved';

          console.log(txn)
          this.transactions=txn;
      },(err)=>{
          this.txnRequestStatus='rejected';

          console.log( err)
      })
  }


  getAccount(){

      this.accountRequestStatus='pending';

      this.walletService.getBlockchainAccount().subscribe((account:any)=>{
          this.accountRequestStatus='resolved';

          this.account=account;
          console.log(account)
      },(err)=>{
          this.accountRequestStatus='rejected';

          console.log( err)
      })
  }
}
