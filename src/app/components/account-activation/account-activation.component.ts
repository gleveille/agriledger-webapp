import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent implements OnInit {

  user={} as Iuser;
  constructor(private userService:UserService,private router:Router,private toastService:ToastService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user:Iuser)=>{
      this.user=user;
    },(err)=>{
      console.log(err);
    });
  }

    createBlockchainAccount(){
    this.userService.createAccountOnBlockchain().subscribe((user:Iuser)=>{
        this.toastService.success('Account','Your account have been created.we are transferring some ACC');
        this.router.navigate(['/onboarding/issuer-registration']);
    },(err)=>{
      console.log(err);
        this.toastService.error('Account',err.message);

    });

    }
}
