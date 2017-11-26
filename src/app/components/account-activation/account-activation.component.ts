import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent implements OnInit {

  user={} as Iuser;
  constructor(private userService:UserService) { }

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
    },(err)=>{
        console.log(err);
    });

    }
}
