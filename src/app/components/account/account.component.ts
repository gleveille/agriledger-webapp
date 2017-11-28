import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  user={} as Iuser;
  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getUser().subscribe((user:Iuser)=>{
      this.user=user;
    },(err)=>{
      console.log(err);
    });
  }

}
