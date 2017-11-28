import { Component, OnInit } from '@angular/core';
import {FarmerService} from "../../services/farmer.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {IserviceError} from "../../interface/serviceError.interface";
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  farmers=[] as Iuser[];
  farmerResolvedStatus='resolved';
  errorMessage:string=null;
  constructor(private farmerService:FarmerService,
              private userService:UserService,
              private router:Router,
              private toastService:ToastService) { }

  ngOnInit() {
    this.farmerResolvedStatus='pending';
    this.userService.getUsersByRole('farmer').subscribe((farmers:any[])=>{

        this.farmerResolvedStatus='resolved';

        console.log(farmers);
      this.farmers=farmers;
    },(err:IserviceError)=>{
      console.log(err);
        this.farmerResolvedStatus='rejected';
        this.errorMessage=err.message;

        this.toastService.error('Farmer',err.message);
    });

  }

}
