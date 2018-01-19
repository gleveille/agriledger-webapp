import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Iuser} from "../../interface/user.interface";
import {Location} from "@angular/common";
import {DocumentType} from '../../enum/document_enum'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
    DocumentType=DocumentType;
  user:Iuser={};
  constructor(private activatedRoute:ActivatedRoute,private router:Router,
              private toastService:ToastService,
              private location:Location,
              private userService:UserService) { }

  ngOnInit() {
      this.activatedRoute.params.concatMap((param)=>{
          console.log(param)
          return this.userService.getUserById(param.userId);
      }).subscribe((user:Iuser)=>{
          this.user=user;

          console.log(this.user)
      },(err)=>{
          console.log(err);
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
