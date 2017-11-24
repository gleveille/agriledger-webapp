import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';

import { NotificationsComponent } from './notifications/notifications.component';
import {LandingComponent} from "./landing/landing.component";
import {LoginSponserComponent} from "./login-sponser/login-sponser.component";
import {LoginOpsComponent} from "./login-ops/login-ops.component";
import {DashboardSponserComponent} from "./dashboard-sponser/dashboard-sponser.component";
import {DashboardOpsComponent} from "./dashboard-ops/dashboard-ops.component";
import {PasswordChangeComponent} from "./password-change/password-change.component";
import {IssuerRegistrationComponent} from "./issuer-registration/issuer-registration.component";

const routes: Routes =[
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent


    },
    {
        path: 'login-sponser',
        component: LoginSponserComponent

    },

    {
        path: 'login-ops',
        component: LoginOpsComponent

    },
    {
        path: 'password-change',
        component: PasswordChangeComponent

    },
    {
        path: 'issuer-registration',
        component: IssuerRegistrationComponent

    },
    {
        path: 'login-ops',
        component: LoginOpsComponent

    },
    {
        path: 'dashboard-sponser',
        component: DashboardSponserComponent,
        children: [
            { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
            { path: 'user-profile', component: UserProfileComponent },
            { path: 'user-profile',   component: UserProfileComponent },
            { path: 'table-list',     component: TableListComponent },
            { path: 'notifications',  component: NotificationsComponent },
        ]
    },
    {
        path: 'dashboard-ops',
        component: DashboardOpsComponent,
        children: [
            { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
            { path: 'user-profile', component: UserProfileComponent },
            { path: 'user-profile',   component: UserProfileComponent },
            { path: 'table-list',     component: TableListComponent },
            { path: 'notifications',  component: NotificationsComponent },
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
