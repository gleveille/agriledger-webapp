import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent implements OnInit {

  user={} as Iuser;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user:Iuser)=>{
      this.user=user;
    },(err)=>{
      console.log(err);
    });
  }

    createBlockchainAccount(){
    console.log('creating')
    this.userService.createAccountOnBlockchain().subscribe((user:Iuser)=>{
      console.log('succcesss')
        this.router.navigate(['/onboarding/issuer-registration']);
    },(err)=>{
        console.log(err);
    });

    }
}
