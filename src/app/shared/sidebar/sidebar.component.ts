import { Component, OnInit } from '@angular/core';

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
    { path: 'wallet', title: 'Transactions',  icon:'description', class: '' }

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
