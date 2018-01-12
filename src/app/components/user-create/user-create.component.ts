import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import { FileUploader } from 'ng2-file-upload';
import {ContainerApi} from '../../../../src/app/api.config'
import {ServerUrl} from '../../../../src/app/api.config'
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
    serverUrl=ServerUrl;
    uploader= new FileUploader({url: ContainerApi.profileDocumentsUpload.url()});
    user={password:'',role:'farmer',profiles:{name:'',phone:''}} as Iuser;
    passwordRetyped:string='';
    totalSelectedFiles:number=0;
    roles=['ops','sponsor','farmer'];
    createRequestStatus='resolved';

    constructor(private userService:UserService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {
      this.createPassword();

      this.uploader.onSuccessItem= (item:any, response:any, status:any, headers:any) => {
          //this.resetForm();
          this.totalSelectedFiles--;
          if(this.totalSelectedFiles===0){
              this.toastService.success('User','User has been created and document uploaded',5000);
              this.resetForm();
          }
      };

      this.uploader.onErrorItem= (item:any, response:any, status:any, headers:any) => {
          this.toastService.error('User','User has been created but one or more documents could not be uploaded',10000);
          this.resetForm();

      };

  }

    private upload(profileId:string){
        this.uploader.queue.forEach((queue)=>{
            queue.headers.push({name:'x-id',value:profileId})
        });
        this.totalSelectedFiles=this.uploader.queue.length;
        this.uploader.uploadAll();
    }
    private createPassword(){
      const specials = '!@&*';
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';

      const all = specials + lowercase + uppercase + numbers;

      function pick(str,min, max) {
          let n, chars = '';

          if (typeof max === 'undefined') {
              n = min;
          } else {
              n = min + Math.floor(Math.random() * (max - min));
          }

          for (let i = 0; i < n; i++) {
              chars += str.charAt(Math.floor(Math.random() * str.length));
          }

          return chars;
      };


      function shuffle(str) {
          let array = str.split('');
          let tmp, current, top = array.length;

          if (top) while (--top) {
              current = Math.floor(Math.random() * (top + 1));
              tmp = array[current];
              array[current] = array[top];
              array[top] = tmp;
          }

          return array.join('');
      };

     let  password=this.user.password+pick(numbers,6,6)
/*
      password=password+this.user.password+pick(numbers,6,6)
*/
/*
      password=password+this.user.password+pick(specials,1,undefined)
*/
      password=shuffle(password);

      this.user.password=password;
      this.passwordRetyped=password;

  }
    private register(){
        console.log(this.user)

        if(!this.user.profiles.name){
            return this.toastService.error('User','Name is required');
        }
        if(!this.user.email){
            return this.toastService.error('User','Email is required');
        }
        if(!this.user.password){
            return this.toastService.error('User','Password is required');
        }
        if(!this.user.profiles.phone){
            return this.toastService.error('User','Phone is required');
        }
        if(!this.passwordRetyped){
            return this.toastService.error('User','Please confirm the Password');
        }

        if(this.user.password!==this.passwordRetyped){
            return this.toastService.error('User','Password and confirm Password does not match');
        }
        this.createRequestStatus='pending';
        this.userService.register(this.user).subscribe((profile:any)=>{
            console.log('recived')
            console.log(profile)
            if(this.uploader.queue.length){
                this.upload(profile.id);
            }
            else{
                this.toastService.success('User','User has been created');
            }

        },(err)=>{
            if(err.showError){
                this.toastService.error('User',err.message||'User could not be created.Try again');
            }
            this.resetForm();


        });
    }

    private resetForm(){
        this.createRequestStatus='resolved';
        this.totalSelectedFiles=0;
        this.user.email='';
        this.user.password='';
        this.user.profiles.name='';
        this.user.profiles.phone='';
        this.createPassword();
        this.uploader.queue=[];
    }
}
