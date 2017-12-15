import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user={} as Iuser;
  passwordRetyped:string=null;
  roles=['ops','sponsor','farmer'];
    createRequestStatus='resolved';

    constructor(private userService:UserService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {
  }
    register(){

      if(!this.user.name){
       return this.toastService.error('User','Name is required');
      }
        if(!this.user.email){
            return this.toastService.error('User','Email is required');
        }
        if(!this.user.password){
            return this.toastService.error('User','Password is required');
        }

        if(!this.passwordRetyped){
            return this.toastService.error('User','Please enter the password again');
        }

        if(this.user.password!==this.passwordRetyped){
            return this.toastService.error('User','Password does not match');
        }
        this.createRequestStatus='pending';
        this.userService.register(this.user).subscribe((data:any)=>{
            this.createRequestStatus='resolved';
            this.toastService.success('User','created successfully');
            this.user.name=null;
            this.user.email=null;
            this.user.password=null;
            this.user.role=null;
            this.passwordRetyped=null;

        },(err)=>{
            this.createRequestStatus='rejected';
            if(err.showError){
                this.toastService.error('User',err.message);

            }


        });
    }
}
