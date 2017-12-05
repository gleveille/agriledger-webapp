import { Component, OnInit } from '@angular/core';
import {AssetsPoolService} from "../../services/assets-pool.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import 'rxjs/add/operator/concatMap';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import {Iuser} from "../../interface/user.interface";
@Component({
  selector: 'app-asset-pool-list',
  templateUrl: './asset-pool-list.component.html',
  styleUrls: ['./asset-pool-list.component.css']
})
export class AssetPoolListComponent implements OnInit {

  pools=[];
  constructor(private assetPoolService:AssetsPoolService,
              private router:Router,
              private toastService:ToastService,
              private userService:UserService) {

  }

  ngOnInit() {

    this.getPools();

  }


  getPools(){
    this.assetPoolService.getPools().subscribe((pools:any[])=>{
        this.pools=pools;
        console.log(pools)
        this.getPoolInfoFromBlockchain();
    },(err)=>{
      console.log(err);
    })
  }


  getPoolInfoFromBlockchain(){
      let arr=[];
      this.pools.forEach((pool)=>{
        const name=pool.issuerName+'.'+pool.currency;
        arr.push(this.assetPoolService.getAssetPoolInfoFromBlockchain(name));
      })

      console.log(arr.length)
      forkJoin(arr).subscribe(results => {

        const length=this.pools.length;
        for(let i=0;i<length;i++){
          this.pools[i].blockchain=results[i];
        }
        console.log(this.pools)
      });
  }

    getColor(status:string){
        status=String(status);
        switch (status){
            case '1':
                return 'green';
            case '0':
                return '#ff8b4c';
            default:
                return 'black';
        }
    }
}
