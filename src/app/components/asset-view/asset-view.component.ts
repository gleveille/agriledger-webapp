import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../../services/wallet.service";
import 'rxjs/add/operator/concatMap';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {IserviceError} from "../../interface/serviceError.interface";
import {environment} from '../../../environments/environment'
import {Location} from '@angular/common';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

  asset={user:{},status:null,evidences:[]};
  favouriteAssets=[];
  constructor(private activatedRoute:ActivatedRoute,
              private location:Location,
              private assetService:AssetsService,private toastService:ToastService) { }


  ngOnInit() {
      this.assetService.favouriteAssets.subscribe((assets:any[])=>{
          console.log('from subscribe,fav assets are')
          console.log(assets)
          this.favouriteAssets=assets;
      })
      this.activatedRoute.params.concatMap((param)=>{
        console.log(param)
       return this.assetService.getAssetByid(param.assetId);
      }).subscribe((asset)=>{
        this.asset=asset;
        console.log(asset)
          this.asset.evidences.forEach((evidence)=>{
              evidence.url=environment.apiURL+':'+environment.apiPORT+evidence.url;
          });
      },(err)=>{
        console.log(err);
      })
  }

    changeStatus(status:string){
    this.asset.status=status;
    console.log(this.asset)
        this.assetService.updateAsset(this.asset).subscribe((asset)=>{
    this.asset=asset;
    const msg=`changed to ${status}`;
    this.toastService.success('Status',msg);
    console.log(asset)
        },(err:IserviceError)=>{
            this.toastService.error('Status',err.message);
    })
  }

    goBack(){
        this.location.back();

    }

    addToFavourite(asset:any){
        this.assetService.addAssetToFavourite(asset.id,asset.userId).subscribe((data)=>{
            this.toastService.success('Favourite','Added!');
            console.log(asset)
        },(err:IserviceError)=>{
            this.toastService.success('Favourite','Could not be added!');
        })
    }

    removeFromFavourite(asset:any){
        this.assetService.removeAssetFromFavourite(asset.userId).subscribe((data)=>{
            this.toastService.success('Favourite','Removed!');
            console.log(asset)
        },(err:IserviceError)=>{
            this.toastService.success('Favourite','Could not be removed from favourite!');
        })
    }
}
