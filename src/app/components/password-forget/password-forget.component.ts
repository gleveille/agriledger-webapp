import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.scss']
})
export class PasswordForgetComponent implements OnInit {

  email:string='';
  isEmailSent:boolean=false;
  sendHttpRequestStatus:string='resolved';
  constructor(private userService:UserService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {
  }
    sendPasswordResetToken(){
        this.sendHttpRequestStatus='pending';
        this.userService.sendPasswordResetToken(this.email).subscribe((data:any)=>{
            this.sendHttpRequestStatus='resolved';
            this.isEmailSent=true;
            this.toastService.success('Send', 'An email has been sent');

        },(err)=>{
            this.isEmailSent=false;
            this.sendHttpRequestStatus='rejected';
            this.toastService.error('Reset',err.message || 'An email could not be sent');
        });
    }

    resend(){
        this.email='';
        this.isEmailSent=false;
    }
}
