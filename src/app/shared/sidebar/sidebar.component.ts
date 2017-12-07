import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'account', title: 'Account',  icon:'content_paste', class: '' },
    { path: 'assets', title: 'Assets',  icon:'description', class: '' },
    { path: 'assets-pool-list', title: 'Asset Pool',  icon:'donut_large', class: '' },
    { path: 'wallet', title: 'Wallet',  icon:'account_balance_wallet', class: '' },
    { path: 'tokens', title: 'Issued Tokens',  icon:'grade', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
