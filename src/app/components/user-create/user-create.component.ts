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

  user={password:'',role:'farmer'} as Iuser;
  passwordRetyped:string='';
  roles=['ops','sponsor','farmer'];
    createRequestStatus='resolved';

    constructor(private userService:UserService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {
        this.createPassword();
  }

  createPassword(){
      const specials = '!@&*';
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';

      const all = specials + lowercase + uppercase + numbers;

      String.prototype.pick = function(min, max) {
          let n, chars = '';

          if (typeof max === 'undefined') {
              n = min;
          } else {
              n = min + Math.floor(Math.random() * (max - min));
          }

          for (let i = 0; i < n; i++) {
              chars += this.charAt(Math.floor(Math.random() * this.length));
          }

          return chars;
      };


// Credit to @Christoph: http://stackoverflow.com/a/962890/464744
      String.prototype.shuffle = function() {
          let array = this.split('');
          let tmp, current, top = array.length;

          if (top) while (--top) {
              current = Math.floor(Math.random() * (top + 1));
              tmp = array[current];
              array[current] = array[top];
              array[top] = tmp;
          }

          return array.join('');
      };

      let password = (specials.pick(2) + lowercase.pick(4) + uppercase.pick(2)).shuffle();
      this.user.password=password;
      this.passwordRetyped=password;

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
            this.createPassword();

        },(err)=>{
            this.createRequestStatus='rejected';
            if(err.showError){
                this.toastService.error('User',err.message);

            }


        });
    }
}
