import { Component, OnInit } from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users:Iuser[]=[];
  roleFilters=[
      {name:'Farmer',value:'farmer',type:'role'},
      {name:'Sponsor',value:'sponsor',type:'role'},
      {name:'Ops',value:'ops',type:'role'},
      {name:'All',value:'all',type:'role'}
      ];
    dateFilters=[
        {name:'Recent to last',value:'createdAt',type:'date',sortOrder:'DESC'},
        {name:'Last to recent',value:'createdAt',type:'date',sortOrder:'ASC'}
    ];
    onboardingFilters=[
        {name:'password changed',value:'isPasswordChanged',type:'onboarding',sortOrder:'ASC'},
        {name:'Account created',value:'isRegisteredOnBlockchain',type:'onboarding',sortOrder:'ASC'},
        {name:'Onboarding completed',value:'isIssuerOnBlockchain',type:'onboarding',sortOrder:'DESC'},
        {name:'ALL',value:'all',type:'onboarding',sortOrder:'DESC'},


    ];
  usersHttpSstatus:string='resolved';
  constructor(private userService:UserService,private toastService:ToastService) { }

  ngOnInit() {
    this.getAllUsers();
  }


    getAllUsers(){
    this.usersHttpSstatus='pending'
    this.userService.getUsers().subscribe((users:Iuser[])=>{
        this.users=users;
        console.log(this.users)
        this.usersHttpSstatus='resolved'
    },(err)=>{
      this.usersHttpSstatus='rejected'
        if(err.showError)
          this.toastService.error('Users',err.message);
    })
  }

    getUsersByRole(role:string){
        this.usersHttpSstatus='pending'
        this.userService.getUsersByRole(role).subscribe((users:Iuser[])=>{
            this.users=users;
            console.log(this.users)
            this.usersHttpSstatus='resolved'
        },(err)=>{
            this.usersHttpSstatus='rejected'
            if(err.showError)
                this.toastService.error('Users',err.message);
        })
    }


    getUsersByOnboardingStatus(status:string){
        this.usersHttpSstatus='pending'
        this.userService.getUsersByOnboardingStatus(status).subscribe((users:Iuser[])=>{
            this.users=users;
            console.log(this.users)
            this.usersHttpSstatus='resolved'
        },(err)=>{
            this.usersHttpSstatus='rejected'
            if(err.showError)
                this.toastService.error('Users',err.message);
        })
    }


    getByFilter(type:string,value:string,sortOrder:string){
        console.log(type,value,sortOrder)
      if(type==='role'){
            if(value==='all')
                this.getAllUsers();
            else
                this.getUsersByRole(value);
        }
        else if(type==='date'){
           // this.getUsersByOnboardingStatus(value);
        }

        else if(type==='onboarding'){
          if(value==='all')
              this.getAllUsers();
          else
            this.getUsersByOnboardingStatus(value);
        }
    }
}
