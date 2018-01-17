import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
    @ViewChild('f') loginForm :NgForm;

  credential={oldPassword:null,newPassword:null,rePassword:null};
  passwordChangeRequestStatus='resolved';
  passwordFormatText='Minimum eight characters, must include atleast one number and one special character';
  constructor(private toastService:ToastService,private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
    changePassword(f:NgForm,isValid){
        if(!isValid){
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
            this.loginForm.resetForm();
            this.credential.oldPassword='';
            this.credential.newPassword='';
            this.credential.rePassword='';

            this.toastService.success('Password','Changed Sucessfully');

    },(err)=>{
            this.passwordChangeRequestStatus='rejected';

            this.toastService.error('Password',err.message);
    });
    }
}
