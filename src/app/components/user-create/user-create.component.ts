import {Component, OnInit, ViewChild} from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import { FileUploader } from 'ng2-file-upload';
import {ContainerApi} from '../../../../src/app/api.config'
import {NgForm} from "@angular/forms";
import {AddressService} from "../../services/address.service";
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
    @ViewChild('f') loginForm :NgForm;
    uploader= new FileUploader({url: ContainerApi.profileDocumentsUpload.url()});
    description= Array(10).fill('');
    address={country:[],province:[],city:[],district:[]};

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
            },farmDetails:[{
                farmName:'',
                products:'',
                grade:'',
                crops:'',
                size:'',
                region:''
            }]
        }};
    totalSelectedFiles=0;
    roles=['','ops','sponsor','farmer'];

    createRequestStatus='resolved';

    constructor(private userService:UserService,
                private addressService:AddressService,
                private toastService:ToastService,private router:Router) { }



    addMore(){
        if(this.user.profiles.farmDetails.length>3){
            return this.toastService.error('Farm','Not allowed!');
        }
        this.user.profiles.farmDetails.push({
            farmName:'',
            products:'',
            grade:'',
            crops:'',
            size:'',
            region:''
        })
    }

    ngOnInit() {
      this.getCountry()
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
        console.log(this.description)
        this.uploader.queue.forEach((queue,index)=>{
            const header={name:'x-id',value:profileId};
            queue.headers.push(header)

            if(this.description[index]){
                queue.headers.push({name:'description',value:this.description[index]})
            }
        });
        this.totalSelectedFiles=this.uploader.queue.length;
        console.log(this.uploader.queue)
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

        let totalFileToUpload=this.uploader.queue.length;
        let count=0;
        this.description.forEach((desc)=>{
            if(desc && desc.length)
                count++;
        });

        if(count<totalFileToUpload){
            this.toastService.error('Upload','Please fill the description for the document');
            return;
        }

        this.createRequestStatus='pending';
        this.userService.register(this.user).subscribe((profile:any)=>{
            console.log(profile)
            if(this.uploader.queue.length){
                this.upload(profile.id);
            }
            else{
                this.toastService.success('User','User has been created');
                this.resetForm();
            }

        },(err)=>{
            this.createRequestStatus='rejected';
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
        this.description=Array(10).fill('');
        for (const key of Object.keys(this.user)) {
            console.log(key);
        }
        for (const key of Object.keys(this.user.profiles.address)) {
            this.user.profiles.address[key]='';
        }
        this.user.profiles.farmDetails=[{
            farmName:'',
            products:'',
            grade:'',
            crops:'',
            size:'',
            region:''
        }];
        this.createPassword();

    }



    private onCountryChange(event){
        this.getProvinceByCountry(event)
    }

    private onProvinceChange(event){
        this.getCityByProvince(event)
    }

    private onCityChange(event){
        this.getDistrictByCity(event)
    }


    private getCountry(){

        this.addressService.getCountry().subscribe((data:any[])=>{
            this.address.country=data;
            this.address.province=[];
            this.address.city=[];
            this.address.district=[];
            this.user.profiles.address.country='';
            this.user.profiles.address.province='';
            this.user.profiles.address.city='';
            this.user.profiles.address.district='';

            console.log(this.address.country)
        },(err)=>{

        })
    }


    private getProvinceByCountry(countryName:string){
        this.addressService.getProvinceByCountry(countryName).subscribe((data:any[])=>{
            this.address.province=data;

            this.address.city=[];
            this.address.district=[];
            this.user.profiles.address.province='';
            this.user.profiles.address.city='';
            this.user.profiles.address.district='';
            console.log(this.address.province)
        },(err)=>{

        })
    }

    private getCityByProvince(provinceName:string){
        this.addressService.getCityByProvince(provinceName).subscribe((data:any[])=>{
            this.address.city=data;

            this.address.district=[];
            this.user.profiles.address.city='';
            this.user.profiles.address.district='';

            console.log(this.address.city)

        },(err)=>{

        })
    }

    private getDistrictByCity(cityName:string){
        this.addressService.getDistrictByCity(cityName).subscribe((data:any[])=>{
            this.address.district=data;

            console.log(this.address.district)

        },(err)=>{

        })
    }
}
