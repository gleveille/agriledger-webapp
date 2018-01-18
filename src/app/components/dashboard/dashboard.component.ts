import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {WalletService} from "../../services/wallet.service";
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
import {AssetsService} from "../../services/assets.service";
import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs/Observable';

declare const $: any;

@Component({
  selector: 'app-dashboard-sponsor',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardSponserComponent implements OnInit {

    private lastPoppedUrl: string;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( public location: Location,private userService:UserService,
                 private assetService:AssetsService,
                 private router: Router,private walletService:WalletService) {
    }

    ngOnInit() {
        this.userService.user.concatMap((user:Iuser)=>{
            return Observable.forkJoin([
                this.assetService.loadAllAssets(),
                this.assetService.loadStat(),
                this.assetService.loadFavouriteAssets(user.id)
            ]);
        }).subscribe(()=>{

        },(err)=>{

        })

        $.material.init();

        this.location.subscribe((ev:PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });

    }





}
