import {Component, OnInit, ViewChild} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {WalletService} from "../../services/wallet.service";
declare const $: any;

@Component({
  selector: 'app-dashboard-sponsor',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardSponserComponent implements OnInit {

    private lastPoppedUrl: string;

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( public location: Location, private router: Router,private walletService:WalletService) {
    }

    ngOnInit() {
        $.material.init();

        this.location.subscribe((ev:PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });

    }




}
