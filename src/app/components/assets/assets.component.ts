import { Component, OnInit } from '@angular/core';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assetsRequestStatus:string='resolved';
  assets:any[]=[];
  chosenCategory=null;
  constructor(private assetsService:AssetsService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {

    this.getAssets(null,null);
  }
    getAssets(filterType,filterName){
    if(filterName){
      this.chosenCategory=filterName;
    }
        this.assetsRequestStatus='pending';
        this.assetsService.getAssets(filterType,filterName).subscribe((assets:any[])=>{
            this.assetsRequestStatus='resolved';

            console.log(assets)
            this.assets=assets;
        },(err)=>{
            this.assetsRequestStatus='rejected';

            console.log( err)
        })
    }
}
