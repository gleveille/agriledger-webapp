import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../services/wallet.service";
import 'rxjs/add/operator/concatMap';
import {AssetsService} from "../services/assets.service";

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

  asset={user:{}};
  constructor(private activatedRoute:ActivatedRoute,private assetService:AssetsService) { }


  ngOnInit() {
      this.activatedRoute.params.concatMap((param)=>{
        console.log(param)
       return this.assetService.getAssetByid(param.assetId);
      }).subscribe((asset)=>{
        this.asset=asset;
        console.log(asset)
      },(err)=>{
        console.log(err);
      })
  }

}
