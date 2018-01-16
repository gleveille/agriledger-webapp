import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import {concatMap} from 'rxjs/operator/concatMap'

@Component({
  selector: 'app-favourite-asset',
  templateUrl: './favourite-asset.component.html',
  styleUrls: ['./favourite-asset.component.scss']
})
export class FavouriteAssetComponent implements OnInit {

  user={} as Iuser;
  favouriteAssets=[];
  constructor(private userService:UserService,private assetService:AssetsService,
              private router:Router,
              private toastService:ToastService) { }

  ngOnInit() {
      this.assetService.assets.subscribe((assets:any)=>{
          this.favouriteAssets=assets.favouriteAssets;
      });
      this.userService.user.subscribe((user:Iuser)=>{
          this.user=user;
          this.assetService.loadFavouriteAssets(user.id);
      })

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
    getColorForPoolStatus(status:boolean){
        switch (status){
            case true:
                return 'blue';
            case false:
                return 'black';
            default:
                return 'black';
        }
    }

    unfavourite(id:string){
        this.assetService.removeAssetFromFavourite(id).subscribe((data)=>{
            this.toastService.success('Removed','success!');
        },(err)=>{
            this.toastService.success('UnFavourite','Could not be removed from favourite!');
        })
    }
}
