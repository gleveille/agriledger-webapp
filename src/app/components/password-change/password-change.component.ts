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
  passwordChangeRequestStatus='resolved';
  constructor(private toastService:ToastService,private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
    changePassword(){
      if(!this.credential.oldPassword){
          this.toastService.error('Password','Old password is required');
          return;

      }
      else if(!this.credential.newPassword){
          this.toastService.error('Password','New password is required');
          return;

      }
      else if(!this.credential.rePassword){
          this.toastService.error('Password','Please type your new password again');
          return;

      }
    if(this.credential.newPassword!==this.credential.rePassword){
      this.toastService.error('Password','Password does not match');
      return;
    }

    this.passwordChangeRequestStatus='pending';
    this.userService.changePassword(this.credential.oldPassword,this.credential.newPassword)
        .subscribe((data:any)=>{
            this.passwordChangeRequestStatus='resolved';
            this.credential.oldPassword=null;
            this.credential.newPassword=null;
            this.credential.rePassword=null;

            this.toastService.success('Password','Changed Sucessfully');

    },(err)=>{
            this.passwordChangeRequestStatus='rejected';

            this.toastService.error('Password',err.message);
    });
    }
}
