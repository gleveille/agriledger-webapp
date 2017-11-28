import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {TableListComponent} from './components/table-list/table-list.component';
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
import {AboutUsComponent} from "./shared/about-us/about-us.component";
import {ContactComponent} from "./shared/contact/contact.component";
import {PrivacyComponent} from "./shared/privacy/privacy.component";
import {TermsComponent} from "./shared/terms/terms.component";

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
        path: 'about-us',
        component: AboutUsComponent,
    },
    {
        path: 'contact-us',
        component: ContactComponent,
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
    },
    {
        path: 'terms',
        component: TermsComponent,
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
            {path: '', redirectTo: 'user-profile', pathMatch: 'full'},
            {path: 'user-profile', component: UserProfileComponent},
            {path: 'table-list', component: TableListComponent},
            {path: 'assets', component: AssetsComponent},
            {path: 'assets-pool', component: AssetPoolComponent},
            {path: 'wallet', component: WalletComponent}
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
