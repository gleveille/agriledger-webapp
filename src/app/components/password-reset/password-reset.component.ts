import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
    credential={oldPassword:null,newPassword:null,rePassword:null};
    passwordChangeRequestStatus='resolved';
    constructor(private toastService:ToastService,private userService:UserService,private router:Router) { }

    ngOnInit() {
    }
    changePassword(){
        if(this.credential.newPassword!==this.credential.rePassword){
            this.toastService.error('Password','Password does not match');
            return;
        }

        this.passwordChangeRequestStatus='pending';
        this.userService.resetPassword(this.credential.oldPassword,this.credential.newPassword)
            .subscribe((data:any)=>{
                this.passwordChangeRequestStatus='resolved';

                this.toastService.success('Password','Changed Sucessfully');
                this.router.navigate(['/dashboard']);

            },(err)=>{
                this.passwordChangeRequestStatus='rejected';

                this.toastService.error('Password',err.message);
            });
    }
}
