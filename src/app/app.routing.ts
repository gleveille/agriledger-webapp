import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableListComponent } from './components/table-list/table-list.component';
import {LandingComponent} from "./components/landing/landing.component";
import {PasswordChangeComponent} from "./components/password-change/password-change.component";
import {AccountActivationComponent} from "./components/account-activation/account-activation.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardSponserComponent} from "./components/dashboard/dashboard.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {AlreadyAuthenticatedGuard} from "./guards/already-authenticated.guard";

const routes: Routes =[
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent,
        canActivate:[AlreadyAuthenticatedGuard],


    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate:[AlreadyAuthenticatedGuard],

    },

    {
        path: 'password-change',
        component: PasswordChangeComponent

    },
    {
        path: 'account-activation',
        component: AccountActivationComponent

    },

    {
        path: 'dashboard',
        component: DashboardSponserComponent,
        data: {
            expectedRole: ['sponsor','ops']
        },
        canActivate:[AuthenticationGuard,AuthorizationGuard],

        children: [
            { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
            { path: 'user-profile', component: UserProfileComponent },
            { path: 'user-profile',   component: UserProfileComponent },
            { path: 'table-list',     component: TableListComponent }
        ]
    },
    { path: '**', redirectTo: '' }

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
