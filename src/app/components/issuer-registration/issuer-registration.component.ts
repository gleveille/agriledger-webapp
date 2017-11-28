import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-issuer-registration',
  templateUrl: './issuer-registration.component.html',
  styleUrls: ['./issuer-registration.component.css']
})
export class IssuerRegistrationComponent implements OnInit {

    user={} as Iuser;
    issuer={name:null,description:null};
    constructor(private userService:UserService) { }

    ngOnInit() {
        this.userService.getUser().subscribe((user:Iuser)=>{
            this.user=user;
        },(err)=>{
            console.log(err);
        });
    }

    registerAsIssuer(){
        console.log('creating')
      /*  this.userService.createAccountOnBlockchain().subscribe((user:Iuser)=>{
            console.log('succcesss')
        },(err)=>{
            console.log(err);
        });*/

    }

}
