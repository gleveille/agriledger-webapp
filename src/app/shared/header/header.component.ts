import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input()balance:any=0;
    isAuthenticated:boolean = false;

    constructor(private userService:UserService, private router:Router, private toastService:ToastService) {
    }

    ngOnInit() {
        this.isAuthenticated = this.userService.isAuthenticated();
    }

    logout() {
        this.userService.logout().subscribe((data)=> {
            this.router.navigate(['/login']);
        }, (err)=> {
            this.toastService.error('Logout', 'Could not be logged out.Try again');
        });
    }
}
