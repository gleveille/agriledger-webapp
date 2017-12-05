import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../../services/wallet.service";
import 'rxjs/add/operator/concatMap';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {IserviceError} from "../../interface/serviceError.interface";
import {AssetsPoolService} from "../../services/assets-pool.service";
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-asset-pool-view',
  templateUrl: './asset-pool-view.component.html',
  styleUrls: ['./asset-pool-view.component.css']
})
export class AssetPoolViewComponent implements OnInit {

  pool={blockchain:null};
    constructor(private activatedRoute:ActivatedRoute,private assetPoolService:AssetsPoolService,private toastService:ToastService)
    { }

    ngOnInit() {
        this.activatedRoute.params.concatMap((param)=>{
            console.log(param)
            return this.assetPoolService.getPoolById(param.assetPoolId);
        }).do((pool:any)=>{
          this.pool=pool;
          console.log(pool)
        }).concatMap((pool)=>{
          const name=pool.issuerName+'.'+pool.currency;
            return this.assetPoolService.getAssetPoolInfoFromBlockchain(name);
        }).subscribe((data)=>{
          console.log(data)
            this.pool.blockchain=data;
        },(err)=>{
          console.log(err);
        })
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
