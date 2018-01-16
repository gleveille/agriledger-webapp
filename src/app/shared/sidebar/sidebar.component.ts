import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import {Iuser} from "../../interface/user.interface";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const MenuItemsForSponsor:  RouteInfo[] = [
    { path: 'account', title: 'Account',  icon:'account_circle', class: '' },
    { path: 'assets', title: 'Assets',  icon:'account_balance_wallet', class: '' },
    { path: 'assets-pool-list', title: 'Pools',  icon:'donut_large', class: '' },
    { path: 'tokens', title: 'Tokens',  icon:'grade', class: '' },
    { path: 'transfer', title: 'Transfer',  icon:'send', class: '' },
    { path: 'wallet', title: 'Transactions',  icon:'description', class: '' },
    { path: '/dashboard/password-change', title: 'Change Password',  icon:'lock', class: 'hidden-lg hidden-md' }

];

export const MenuItemsForOps:  RouteInfo[] = [
    { path: 'account', title: 'Account',  icon:'account_circle', class: '' },
    { path: 'assets', title: 'Assets',  icon:'account_balance_wallet', class: '' },
    { path: 'assets-pool-list', title: 'Pools',  icon:'store', class: '' },
    { path: 'tokens', title: 'Tokens',  icon:'stars', class: '' },
    { path: 'transfer', title: 'Transfer',  icon:'send', class: '' },
    { path: 'wallet', title: 'Transactions',  icon:'history', class: '' },
    { path: 'user-create', title: 'Create Users',  icon:'person_add', class: '' },

    { path: 'user-list', title: 'List Users',  icon:'people', class: '' },

    { path: '/dashboard/password-change', title: 'Change Password',  icon:'lock', class: 'hidden-lg hidden-md' }

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItemsForSponsor:  RouteInfo[] = MenuItemsForSponsor

    menuItemsForOps:  RouteInfo[] = MenuItemsForOps;


  user={} as Iuser;

  constructor(private userService:UserService,private toastService:ToastService,private router:Router) {


  }

  ngOnInit() {
    this.userService.user.subscribe((user:Iuser)=>{
        console.log('from sidebar')
        console.log(user)
        this.user=user;
    },(err)=>{
        this.router.navigate(['/login']);

    })
  }
    logout() {
        this.userService.logout().subscribe((data)=> {
            this.router.navigate(['/login']);
        }, (err)=> {
            this.toastService.error('Logout', 'Could not be logged out.Try again');
        });
    }
}
