
import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-password-set-farmer',
    templateUrl: './password-set-farmer.component.html',
    styleUrls: ['./password-set-farmer.component.scss']
})
export class PasswordSetFarmerComponent implements OnInit {
    credential={accessToken:null,newPassword:null,rePassword:null,role:null};
    isSuccess:boolean=false;
    passwordChangeRequestStatus='resolved';
    passwordFormatText='Password should be 6 digit long';

    constructor(private userService:UserService,private router:Router,
                private activatedRoute:ActivatedRoute,
                private toastService:ToastService) { }

    ngOnInit() {

        this.userService.resetLocalStorage();
        this.activatedRoute.queryParams.subscribe((params: Params) => {
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
                this.isSuccess=true;

            },(err)=>{
                this.passwordChangeRequestStatus='rejected';
                this.toastService.error('Password',err.message);
            });
    }


}


