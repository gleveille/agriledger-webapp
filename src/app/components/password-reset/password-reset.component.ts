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
    credential={oldPassword:'',newPassword:'',rePassword:''};
    passwordChangeRequestStatus='resolved';
    passwordFormatText='Minimum eight characters, must include atleast one number and one special character';

    constructor(private toastService:ToastService,private userService:UserService,private router:Router) { }

    ngOnInit() {
    }
    changePassword(){
        const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

        if(!this.credential.newPassword){
            this.toastService.error('Password','Please enter your new password');
            return;
        }
        else if(!pattern.test(this.credential.newPassword)){
            this.toastService.error('Password',this.passwordFormatText);
            return;
        }

        else if(this.credential.newPassword!==this.credential.rePassword){
            this.toastService.error('Password','Password does not match');
            return;
        }

        this.passwordChangeRequestStatus='pending';
        this.userService.changePassword(this.credential.oldPassword,this.credential.newPassword)
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
