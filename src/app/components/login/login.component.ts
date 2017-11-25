import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-sponsor',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={} as Iuser;
  constructor(private userService:UserService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {
  }

    login(){
    this.userService.login(this.user).subscribe((data:any)=>{
      const user:Iuser=data.user;
      console.log(user);
      if(user.role==='ops' || user.role==='sponsor'){
          this.router.navigate(['dashboard']);

      }
      else {
          this.toastService.error('Role','You do not have valid role to proceed');

      }
    },(res)=>{
      console.log(res);
      if(res.status===401){
          console.log('Login failed')
          this.toastService.error('Login','Wrong email/password');

      }
    });
    }

}
