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
  chosenStatus=null;
  constructor(private assetsService:AssetsService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {

    this.getAssets(null,null);
  }
    getAssets(filterType,filterName){
    if(filterName && filterType==='category'){
      this.chosenCategory=filterName;
      this.chosenStatus=null;
    }
        if(filterName && filterType==='status'){
            this.chosenStatus=filterName;
            this.chosenCategory=null;
        }
        this.assetsRequestStatus='pending';
        this.assetsService.getAssets(filterType,filterName).subscribe((assets:any[])=>{
            this.assetsRequestStatus='resolved';

            console.log(assets)
            this.assets=assets;
        },(err)=>{
            this.assetsRequestStatus='rejected';

            console.log( err);
        })
    }

    getColor(status:string){
        switch (status){
            case 'pending':
                return 'black';
            case 'verified':
                return 'green';
            case 'rejected':
                return '#ff8b4c';
            case 'pooled':
                return 'blue';
            default:
                return 'black';
        }
    }
}
