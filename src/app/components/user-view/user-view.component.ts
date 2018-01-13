import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Iuser} from "../../interface/user.interface";
import {Location} from "@angular/common";
import {ServerUrl} from '../../api.config'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  serverUrl=ServerUrl;
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
}
