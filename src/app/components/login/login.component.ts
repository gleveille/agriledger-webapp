import {Component, OnInit, TemplateRef} from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
declare var WxLogin:any;
@Component({
  selector: 'app-login-sponsor',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    modalRef: BsModalRef;

  user={} as Iuser;
  isTermChecked:boolean=false;
  loginRequestStatus='resolved';
  constructor(private userService:UserService,
              private modalService: BsModalService,
              private toastService:ToastService,private router:Router) { }

  ngOnInit() {
  }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);

    }

    login(f:NgForm,isValid){
        if(!isValid){
            return;
        }

        if(!this.isTermChecked){
           return this.toastService.error('Term','Please check the term and condition before proceed');

        }
      this.loginRequestStatus='pending';
    this.userService.login(this.user).subscribe((data:any)=>{
        this.loginRequestStatus='resolved';
        const user:Iuser=data.user;
      if(user.role==='ops' || user.role==='sponsor'){
          this.router.navigate(['dashboard']);
      }
      else {
          this.toastService.error('Role','You do not have valid role to proceed');

      }
    },(res)=>{
        this.loginRequestStatus='rejected';

        console.log(res);
      if(res.status===401){
          console.log('Login failed')
          this.toastService.error('Login','Wrong email/password');

      }
    });
    }
    goToForgetPasswordPage(){
        this.router.navigate(['password-forget']);

    }
}
