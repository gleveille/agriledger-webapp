import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


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
