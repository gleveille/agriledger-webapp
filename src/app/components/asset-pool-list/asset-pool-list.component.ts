import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AssetsPoolService} from "../../services/assets-pool.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import 'rxjs/add/operator/concatMap';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import {Iuser} from "../../interface/user.interface";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-asset-pool-list',
  templateUrl: './asset-pool-list.component.html',
  styleUrls: ['./asset-pool-list.component.css']
})
export class AssetPoolListComponent implements OnInit {
    modalRef: BsModalRef;

  pools=[];
  assetPoolHttpSstatus='resolved';
  issueTokenHttpStatus='resolved';
  token={amount:null,exchangeRate:null};
  selectedPool={maximum:null,precision:null,blockchain:{currency:null}};
  constructor(private assetPoolService:AssetsPoolService,
              private router:Router,
              private modalService: BsModalService,
              private toastService:ToastService,
              private userService:UserService) {

  }

  ngOnInit() {

    this.getPools();

  }

    openModal(template: TemplateRef<any>,selectedPool) {
      this.selectedPool=selectedPool;
      console.log(this.selectedPool)
        this.modalRef = this.modalService.show(template);

    }

    issueToken(){
        if(!this.token.amount){
            this.toastService.error('Issue','Invalid amount');
            return;
        }

        if(!this.token.exchangeRate){
            this.toastService.error('Issue','Invalid exchangeRate');
            return;

        }

        this.issueTokenHttpStatus='pending';
        this.assetPoolService.issueToken(this.token.amount,this.token.exchangeRate,this.selectedPool.precision,this.selectedPool.blockchain.currency)
            .subscribe((data:any)=>{
            console.log(data)
            this.issueTokenHttpStatus='resolved';
            this.toastService.success('Issue','Issued successfully');
        },(err)=>{
            this.issueTokenHttpStatus='rejected';
            this.toastService.error('Issue',err.message);
            console.log(err);
        });
    }


  getPools(){
        this.assetPoolHttpSstatus='pending';
    this.assetPoolService.getPools().subscribe((pools:any[])=>{
        this.pools=pools;
        console.log(pools)
        this.getPoolInfoFromBlockchain();
    },(err)=>{
      console.log(err);
        this.assetPoolHttpSstatus='rejected';

    })
  }


  getPoolInfoFromBlockchain(){
      let arr=[];
      this.pools.forEach((pool)=>{
        const name=pool.issuerName+'.'+pool.currency;
        arr.push(this.assetPoolService.getAssetPoolInfoFromBlockchain(name));
      })

      console.log(arr.length)
      forkJoin(arr).subscribe(results => {

        const length=this.pools.length;
        for(let i=0;i<length;i++){
          this.pools[i].blockchain=results[i];
        }
        console.log(this.pools)
          this.assetPoolHttpSstatus='resolved';

      },(err)=>{
          this.assetPoolHttpSstatus='rejected';

      });
  }

    getColor(status:string){
        status=String(status);
        switch (status){
            case '1':
                return 'green';
            case '0':
                return '#ff8b4c';
            default:
                return 'black';
        }
    }
}
