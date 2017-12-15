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
      {name:'All',value:'all',type:'role'}
      ];
    dateFilters=[
        {name:'Recent to last',value:'createdAt',type:'date',sortOrder:'DESC'},
        {name:'Last to recent',value:'createdAt',type:'date',sortOrder:'ASC'}
    ];
    onboardingFilters=[
        {name:'Unchanged Password',value:'createdAt',type:'date',sortOrder:'DESC'},
        {name:'',value:'createdAt',type:'date',sortOrder:'ASC'}
    ];
  usersHttpSstatus:string='resolved';
  constructor(private userService:UserService,private toastService:ToastService) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(){
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

    getByFilter(type:string,value:string,sortOrder:string){

    }
}
