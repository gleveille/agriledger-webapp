import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Iuser} from "../../interface/user.interface";

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {

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
        }

        else {
            this._user = {profiles:{farmDetails:[],address:{}}};
        }

    }

    @Output() onProfileUpdate:EventEmitter<any> = new EventEmitter();

    constructor(private userService:UserService,private toastService:ToastService) { }
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
}
