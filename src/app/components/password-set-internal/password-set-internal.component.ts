
import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-password-set-internal',
    templateUrl: './password-set-internal.component.html',
    styleUrls: ['./password-set-internal.component.scss']
})
export class PasswordSetInternalComponent implements OnInit {
    credential={accessToken:null,newPassword:null,rePassword:null,role:null};
    passwordChangeRequestStatus='resolved';
    passwordFormatText='Minimum eight characters, must include atleast one number and one special character';

    constructor(private userService:UserService,private router:Router,
                private activatedRoute:ActivatedRoute,
                private toastService:ToastService) { }

    ngOnInit() {

        this.userService.resetLocalStorage();
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            console.log(params)
            this.credential.accessToken = params['accessToken'];

        });
    }

    resetPassword(f:NgForm,isValid){
        if(!isValid){
            return;
        }

        if(this.credential.newPassword!==this.credential.rePassword){
            this.toastService.error('Password','Password does not match');
            return;
        }

        this.passwordChangeRequestStatus='pending';
        this.userService.resetPassword(this.credential.accessToken,this.credential.newPassword)
            .subscribe((data:any)=>{
                this.passwordChangeRequestStatus='resolved';
                this.toastService.success('Success','Password has been set.Please login');
                this.router.navigate(['/login']);

            },(err)=>{
                this.passwordChangeRequestStatus='rejected';

                this.toastService.error('Password',err.message);
            });
    }


}
