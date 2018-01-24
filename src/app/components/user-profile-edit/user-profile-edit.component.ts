import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Iuser} from "../../interface/user.interface";
import {AddressService} from "../../services/address.service";

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
    address={country:[],province:[],city:[],district:[]};

    profileStatus=['pending','approved','rejected']
    currentUser:Iuser={};
    private _user:Iuser;

    @Input('user')
    set user(user:any) {
        if (user !== null && typeof user === 'object') {
            if (!user.profiles) {
                user.profiles = {}
            }
            if (!user.profiles.farmDetails) {
                user.profiles.farmDetails=[];
            }
            if (!user.profiles.address) {
                user.profiles.address={}
            }

            this._user=user;
            if(this._user.profiles.address.country){
                this.getProvinceByCountry(this._user.profiles.address.country)
            }
            if(this._user.profiles.address.province){
                this.getCityByProvince(this._user.profiles.address.province)
            }
            if(this._user.profiles.address.city){
                this.getDistrictByCity(this._user.profiles.address.city)
            }
        }

        else {
            this._user = {profiles:{farmDetails:[],address:{}}};
        }

    }

    @Output() onProfileUpdate:EventEmitter<any> = new EventEmitter();

    constructor(private userService:UserService,
                private addressService:AddressService,
                private toastService:ToastService) { }
    addMore(){
        if(this._user.profiles.farmDetails.length>3){
            return this.toastService.error('Farm','Not allowed!');
        }
        this._user.profiles.farmDetails.push({
            farmName:'',
            products:'',
            grade:'',
            crops:'',
            size:'',
            region:''
        })
    }
  ngOnInit() {
        this.getCountry();
      this.userService.user.subscribe((user:Iuser)=>{
          this.currentUser=user;
      },(err)=>{
      })
  }
    updateProfile(f:NgForm,isValid){
        if(!isValid){
            return;
        }

        this._user.profiles.farmDetails=this._user.profiles.farmDetails.filter((farm)=>{
            let allowed=false;
            Object.keys(farm).forEach((prop)=>{
                if(farm[prop] && farm[prop].length){
                    allowed=true;
                }
            });

            return allowed;
        });
        this.userService.updateProfile(this._user).subscribe(()=>{
            this.toastService.success('Profile','Updated!');
            this.onProfileUpdate.emit({});

        },(err)=>{
            this.toastService.error('Profile',err.message || 'Could not be updated.Try again')
        })
    }



    private onCountryChange(event){
        this.getProvinceByCountry(event)
        this.address.province=[];
        this.address.city=[];
        this.address.district=[];
        this._user.profiles.address.province=null;
        this._user.profiles.address.city=null;
        this._user.profiles.address.district=null;

    }

    private onProvinceChange(event){
        this.address.city=[];
        this.address.district=[];
        this._user.profiles.address.city=null;
        this._user.profiles.address.district=null;
        this.getCityByProvince(event);

    }

    private onCityChange(event){
        this.address.district=[];
        this._user.profiles.address.district=null;
        this.getDistrictByCity(event);
    }


    private getCountry(){

        this.addressService.getCountry().subscribe((data:any[])=>{
            this.address.country=data;
        },(err)=>{

        })
    }


    private getProvinceByCountry(countryName:string){
        this.addressService.getProvinceByCountry(countryName).subscribe((data:any[])=>{
            console.log(data)

            this.address.province=data;
        },(err)=>{

        })
    }

    private getCityByProvince(provinceName:string){
        this.addressService.getCityByProvince(provinceName).subscribe((data:any[])=>{
            console.log(data)
            this.address.city=data;
        },(err)=>{

        })
    }

    private getDistrictByCity(cityName:string){
        this.addressService.getDistrictByCity(cityName).subscribe((data:any[])=>{
            console.log(data)

            this.address.district=data;
        },(err)=>{

        })
    }

}
