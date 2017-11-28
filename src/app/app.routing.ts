import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {LandingComponent} from "./components/landing/landing.component";
import {PasswordChangeComponent} from "./components/password-change/password-change.component";
import {AccountActivationComponent} from "./components/account-activation/account-activation.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardSponserComponent} from "./components/dashboard/dashboard.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {DashboardAuthorizationGuard} from "./guards/dashboardAuthorization.guard";
import {AlreadyAuthenticatedGuard} from "./guards/already-authenticated.guard";
import {OnboardingComponent} from "./onboarding/onboarding.component";
import {Page403Component} from "./page403/page403.component";
import {IssuerRegistrationComponent} from "./issuer-registration/issuer-registration.component";
import {AlreadyChangedPasswordGuard} from "./guards/onboarding-guard/already-changed-password.guard";
import {AlreadyRegisteredOnBlockchainGuard} from "./guards/onboarding-guard/already-registered-on-blockchain.guard";
import {AlreadyAnIssuerGuard} from "./guards/onboarding-guard/already-an-issuer.guard";
import {AssetsComponent} from "./assets/assets.component";
import {AssetPoolComponent} from "./asset-pool/asset-pool.component";
import {WalletComponent} from "./wallet/wallet.component";
import {FarmersComponent} from "./farmers/farmers.component";

const routes:Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent,
        canActivate: [AlreadyAuthenticatedGuard],


    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AlreadyAuthenticatedGuard],

    },
    {
        path: 'unauthorised',
        component: Page403Component,
        canActivate: [AuthenticationGuard],


    },
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {path: '', redirectTo: 'password-change', pathMatch: 'full'},
            {
                path: 'password-change',
                component: PasswordChangeComponent,
                canActivate: [AuthenticationGuard, AlreadyChangedPasswordGuard],

                data: {
                    expectedRole: ['sponsor']
                },
            },
            {
                path: 'account-activation',
                component: AccountActivationComponent,
                canActivate: [AuthenticationGuard, AlreadyRegisteredOnBlockchainGuard],

                data: {
                    expectedRole: ['sponsor']
                }
            },
            {
                path: 'issuer-registration',
                component: IssuerRegistrationComponent,
                canActivate: [AuthenticationGuard, AlreadyAnIssuerGuard],

                data: {
                    expectedRole: ['sponsor']
                }
            }
        ]
    },


    {
        path: 'dashboard',
        component: DashboardSponserComponent,
        data: {
            expectedRole: ['sponsor', 'ops']
        },
        canActivate:[AuthenticationGuard,DashboardAuthorizationGuard],

        children: [
            {path: '', redirectTo: 'farmers', pathMatch: 'full'},
            {path: 'farmers', component: FarmersComponent},
            {path: 'assets', component: AssetsComponent},
            {path: 'assets-pool', component: AssetPoolComponent},
            {path: 'wallet-page', component: WalletComponent},
            {path: 'account', component: AccountComponent},

        ]
    },
    {path: '**', redirectTo: ''}

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
