import { Component, OnInit } from '@angular/core';
import {WalletService} from "../../services/wallet.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  account={} as any;
  transactions:any[]=[];
  txnRequestStatus:string='resolved';
  accountRequestStatus:string='resolved';

    constructor(private walletService:WalletService,private router:Router,private toastService:ToastService) { }

  ngOnInit() {
    this.getAccount();
    this.getTransactions();
  }


  getTransactions(){
      this.txnRequestStatus='pending';
      this.walletService.getTransactions().subscribe((txn:any[])=>{
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
