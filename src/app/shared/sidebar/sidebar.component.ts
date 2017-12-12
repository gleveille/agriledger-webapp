import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'account', title: 'Account',  icon:'account_circle', class: '' },
    { path: 'assets', title: 'Assets',  icon:'account_balance_wallet', class: '' },
    { path: 'assets-pool-list', title: 'Asset Pool',  icon:'donut_large', class: '' },
    { path: 'tokens', title: 'Issued Tokens',  icon:'grade', class: '' },
    { path: 'transfer', title: 'Transfer Tokens',  icon:'send', class: '' },
    { path: 'wallet', title: 'Transactions',  icon:'description', class: '' },
    { path: '/dashboard/password-change', title: 'Change Password',  icon:'lock', class: 'hidden-lg hidden-md' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private userService:UserService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
    logout() {
        this.userService.logout().subscribe((data)=> {
            this.router.navigate(['/login']);
        }, (err)=> {
            this.toastService.error('Logout', 'Could not be logged out.Try again');
        });
    }
}
