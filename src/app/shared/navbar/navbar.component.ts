import {Component, OnInit, ElementRef, Input} from '@angular/core';
import {MenuItemsForOps} from '../sidebar/sidebar.component';
import {MenuItemsForSponsor} from '../sidebar/sidebar.component';

import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
import {WalletService} from "../../services/wallet.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    user={} as Iuser;
    account={};
    private listTitles:any[]=[{path:'account',title:'Account'}];
    location:Location;
    private toggleButton:any;
    private sidebarVisible:boolean;

    constructor(location:Location, private element:ElementRef,
                private walletService:WalletService,
                private userService:UserService,
                private router:Router, private toastService:ToastService) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.getAccount();
        this.userService.getUser().subscribe((user:Iuser)=>{
            this.user=user;
            if(user.role==='sponsor'){
                this.listTitles = MenuItemsForSponsor.filter(listTitle => listTitle);

            }
            if(user.role==='ops'){
                this.listTitles = MenuItemsForOps.filter(listTitle => listTitle);

            }
        },(err)=>{
            console.log(err)
        });
        const navbar:HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();

        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }


        return titlee;
    }

    logout() {
        this.userService.logout().subscribe((data)=> {
            this.router.navigate(['/login']);
        }, (err)=> {
            this.toastService.error('Logout', 'Could not be logged out.Try again');
        });
    }


    getAccount(){
        this.walletService.getBlockchainAccount().subscribe((account:any)=>{
            this.account=account;
            console.log(account)
        },(err)=>{

            console.log( err)
        })
    }

}
