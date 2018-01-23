import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Iuser} from "../../interface/user.interface";
import {Location} from "@angular/common";
import {DocumentType} from '../../enum/document_enum'
import {AssetsService} from "../../services/assets.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
    DocumentType=DocumentType;
  user:Iuser={};
  assets:any[];
  constructor(private activatedRoute:ActivatedRoute,private router:Router,
              private toastService:ToastService,
              private assetService:AssetsService,
              private location:Location,
              private userService:UserService) { }

  ngOnInit() {
      this.activatedRoute.params.concatMap((param)=>{
          this.user.id=param.userId;
          return this.userService.getUserById(this.user.id);
      }).concatMap((user:Iuser)=>{
          this.user=user;
          return this.assetService.getAssetByUserId(this.user.id);
      }).subscribe((assets:any[])=>{
          this.assets=assets;
          console.log(assets)
      },(err)=>{

      })
  }

    goBack(){
        this.location.back();

    }

    onStatusChange(e){
        switch (e.documentType){
            case DocumentType.PROFILE_DOCUMENTS:
                return this.updateProfile();
            default:
                return null;


        }
    }

    updateProfile(){
        this.userService.updateProfile(this.user).subscribe(()=>{
            this.toastService.success('Status','Changed');
        },(err)=>{
            this.toastService.error('Status','Could not be changed');

        })
    }



}
