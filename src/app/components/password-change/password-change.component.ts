import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  credential={oldPassword:null,newPassword:null,rePassword:null};
  constructor(private toastService:ToastService,private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
    changePassword(){
    if(this.credential.newPassword!==this.credential.rePassword){
      this.toastService.error('Password','Password does not match');
      return;
    }
    this.userService.changePassword(this.credential.oldPassword,this.credential.newPassword)
        .subscribe((data:any)=>{
            this.toastService.error('Password','Changed Sucessfully');
            this.router.navigate(['/dashboard']);

    },(err)=>{
       const errMsg = err.status ? `${err.status} - ${err.statusText}` : 'Server error';
       this.toastService.error('Password',errMsg);
       console.log(err);
    });
    }
}
