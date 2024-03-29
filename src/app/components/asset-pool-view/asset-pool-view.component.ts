import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../../services/wallet.service";
import 'rxjs/add/operator/concatMap';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {IserviceError} from "../../interface/serviceError.interface";
import {AssetsPoolService} from "../../services/assets-pool.service";
import 'rxjs/add/operator/do';
import {Location} from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import 'rxjs/add/operator/concatMap';
import {environment} from '../../../environments/environment'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-asset-pool-view',
  templateUrl: './asset-pool-view.component.html',
  styleUrls: ['./asset-pool-view.component.css']
})
export class AssetPoolViewComponent implements OnInit {
    modalRef: BsModalRef;
    assetEvidenceHttpStatus='resolved';
    token={amount:'',exchangeRate:''};
    pool={maximum:null,precision:null,blockchain:null,id:null,assetsId:[],assets:[]};

    issueTokenHttpStatus:string='resolved';
    constructor(private location: Location,
                private modalService: BsModalService,
                private activatedRoute:ActivatedRoute,
                private assetService:AssetsService,
                private assetPoolService:AssetsPoolService,
                private toastService:ToastService)
    { }

    openModal(template: TemplateRef<any>,selectedPool) {
        this.modalRef = this.modalService.show(template);

    }
    goBack(){
        this.location.back();

    }
    ngOnInit() {
        this.activatedRoute.params.concatMap((param)=>{
            console.log(param)
            return this.assetPoolService.getPoolById(param.assetPoolId);
        }).do((pool:any)=>{
          this.pool=pool;
          this.pool.assets=[];
          this.getAssetsById();
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

    getAssetsById(){

        this.assetEvidenceHttpStatus='pending';
        const arr=[];
        this.pool.assetsId.forEach((id)=>{
            arr.push(this.assetService.getAssetByid(id));
        });


        forkJoin(arr).subscribe((results:any[]) => {

            for(let i=0;i<results.length;i++){
                this.pool.assets.push(results[i])
            }


            console.log('pool after getiinbg theor assets')
            console.log(this.pool)

            this.assetEvidenceHttpStatus='resolved';

        },(err)=>{
            this.assetEvidenceHttpStatus='rejected';

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


    getColorForStatus(status:string){
        switch (status){
            case 'pending':
                return 'black';
            case 'verified':
                return 'blue';
            case 'rejected':
                return '#ff8b4c';
            case 'pooled':
                return 'green';
            default:
                return 'black';
        }
    }

}
