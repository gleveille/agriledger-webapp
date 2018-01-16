import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../../services/wallet.service";
import 'rxjs/add/operator/concatMap';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {IserviceError} from "../../interface/serviceError.interface";
import {environment} from '../../../environments/environment'
import {Location} from '@angular/common';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
import {concatMap} from 'rxjs/operator/concatMap'

import {ServerUrl} from '../../api.config'

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

    serverUrl=ServerUrl;
    user={} as Iuser;
  asset={user:{},status:null,evidences:[],id:''};
  isFavourite:boolean=false;
  currentAssetId:string='';
  favouriteAssets=[];
  constructor(private activatedRoute:ActivatedRoute,
              private location:Location,
              private userService:UserService,
              private assetService:AssetsService,private toastService:ToastService) { }


  ngOnInit() {
      this.userService.user.concatMap((user:Iuser)=>{
          this.user=user;
          return this.assetService.loadFavouriteAssets(user.id);
      }).subscribe(()=>{

      },(err)=>{

      });


      this.activatedRoute.params.subscribe((param)=>{
          this.currentAssetId=param.assetId;
          this.getAssetById();
          this.subscribeToAssets();
      })
  }


  subscribeToAssets(){
      this.assetService.assets.subscribe((assets:any)=>{
          console.log(assets)
          this.favouriteAssets=assets.favouriteAssets||[];
          let found=false;
          this.favouriteAssets.forEach((asset)=>{
              if(asset.assetId===this.currentAssetId){
                  found=true;
              }
          });

          if(found){
              this.isFavourite=true;
          }
          else {
              this.isFavourite=false;

          }

          console.log('is favourite', this.isFavourite)
      })
  }

  getAssetById(){
      this.assetService.getAssetByid(this.currentAssetId).subscribe((asset)=>{
          this.asset=asset;
          console.log(this.asset)

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

    favouriteOrUnfavourite(){
        if(!this.asset.id || !this.user.id){
            this.toastService.error('Ooops','Operation can not be performed!');
            return;
        }
        if(this.isFavourite){
            this.removeFromFavourite()
        }
        else {
            this.addToFavourite();
        }
    }

    addToFavourite(){
        this.assetService.addAssetToFavourite(this.asset,this.user.id).subscribe((data)=>{
            this.toastService.success('Addedd','success!');
        },(err:IserviceError)=>{
            this.toastService.success('Favourite','Could not be added!');
        })
    }

    removeFromFavourite(){
        let id;
        this.favouriteAssets.forEach((asset)=>{
            if(asset.userId===this.user.id){
                id=asset.id;
            }
        });
        if(!id){
            this.toastService.error('Unfavourite','could not be removed from favourite');
            return;
        }
        this.assetService.removeAssetFromFavourite(id).subscribe((data)=>{
            this.toastService.success('Removed','success!');
        },(err:IserviceError)=>{
            this.toastService.success('UnFavourite','Could not be removed from favourite!');
        })
    }
}
