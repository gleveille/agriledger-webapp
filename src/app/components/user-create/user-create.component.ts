import {Component, OnInit, ViewChild} from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import { FileUploader } from 'ng2-file-upload';
import {ContainerApi} from '../../../../src/app/api.config'
import {ServerUrl} from '../../../../src/app/api.config'
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
    serverUrl=ServerUrl;
    @ViewChild('f') loginForm :NgForm;
    uploader= new FileUploader({url: ContainerApi.profileDocumentsUpload.url()});
    user:Iuser={
        password:'',
        role:'',
        profiles:{
            name:'',
            phone:'',
            address:{
                line1:'',
                line2:'',
                city:'',
                province:''
            },farmDetails:{
                farmName:'',
                products:'',
                grade:'',
                crops:'',
                size:'',
                region:''
            }
        }};
    totalSelectedFiles:number=0;
    roles=['','ops','sponsor','farmer'];

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
            console.log(queue)
            queue.headers.push({name:'x-id',value:profileId})
        });
        this.totalSelectedFiles=this.uploader.queue.length;
        this.uploader.uploadAll();
    }
    private createPassword(forFarmer:boolean=true){
        this.user.password='';
      const specials = '!@&*';
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      let password='';

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

      console.log(this.user.password)
        if(forFarmer){
            password=this.user.password+pick(numbers,6,6)

        }
        else{
            password=password+this.user.password+pick(lowercase,4,4)
            password=password+this.user.password+pick(numbers,3,3)
            password=password+this.user.password+pick(specials,1,1)

        }
        console.log(password)

      password=shuffle(password);

      this.user.password=password;

  }
    private register(f:NgForm,isValid){
        if(!isValid){
            return;
        }


        this.createRequestStatus='pending';
        this.userService.register(this.user).subscribe((profile:any)=>{
            if(this.uploader.queue.length){
                this.upload(profile.id);
            }
            else{
                this.toastService.success('User','User has been created');
                this.resetForm();
            }

        },(err)=>{
            if(err.showError){
                this.toastService.error('User',err.message||'User could not be created.Try again');
            }
        });
    }

    onChange(role){
        if(role==='farmer'){
            this.createPassword(true)
        }
        else{
            this.createPassword(false)

        }
    }
    private resetForm(){
        this.createRequestStatus='resolved';
        this.uploader.queue=[];
        this.loginForm.resetForm();
        this.totalSelectedFiles=0;
        this.user.role='';
        this.user.email='';
        this.user.password='';
        this.user.profiles.name='';
        this.user.profiles.phone='';
        for (const key of Object.keys(this.user)) {
            console.log(key);
        }
        for (const key of Object.keys(this.user.profiles.address)) {
            this.user.profiles.address[key]='';
        }
        for (const key of Object.keys(this.user.profiles.farmDetails)) {
            this.user.profiles.farmDetails[key]='';
        }
        this.createPassword();

    }
    
}
