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
import {OnboardingComponent} from "./components/onboarding/onboarding.component";
import {Page403Component} from "./shared/page403/page403.component";
import {IssuerRegistrationComponent} from "./components/issuer-registration/issuer-registration.component";
import {AlreadyResetPasswordGuard} from "./guards/onboarding-guard/already-reset-password.guard";
import {AlreadyRegisteredOnBlockchainGuard} from "./guards/onboarding-guard/already-registered-on-blockchain.guard";
import {AlreadyAnIssuerGuard} from "./guards/onboarding-guard/already-an-issuer.guard";
import {AssetsComponent} from "./components/assets/assets.component";
import {WalletComponent} from "./components/wallet/wallet.component";
import {FarmersComponent} from "./components/farmers/farmers.component";
import {AboutUsComponent} from "./shared/about-us/about-us.component";
import {ContactComponent} from "./shared/contact/contact.component";
import {PrivacyComponent} from "./shared/privacy/privacy.component";
import {TermsComponent} from "./shared/terms/terms.component";
import {AssetViewComponent} from "./components/asset-view/asset-view.component";
import {AssetPoolCreateComponent} from "./components/asset-pool-create/asset-pool-create.component";
import {AssetPoolViewComponent} from "./components/asset-pool-view/asset-pool-view.component";
import {AssetPoolListComponent} from "./components/asset-pool-list/asset-pool-list.component";
import {TokensComponent} from "./components/tokens/tokens.component";
import {TransferComponent} from "./components/transfer/transfer.component";
import {PasswordResetComponent} from "./components/password-reset/password-reset.component";
import {UserCreateComponent} from "./components/user-create/user-create.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserUpdateComponent} from "./components/user-update/user-update.component";
import {PasswordForgetComponent} from "./components/password-forget/password-forget.component";
import {PasswordNewComponent} from "./components/password-new/password-new.component";

const routes:Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'password-forget',
        component: PasswordForgetComponent,
        canActivate: [AlreadyAuthenticatedGuard],
    },
    {
        path: 'password-new',
        component: PasswordNewComponent,
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
            {path: '', redirectTo: 'password-reset', pathMatch: 'full'},
            {
                path: 'password-reset',
                component: PasswordResetComponent,
                canActivate: [AuthenticationGuard, AlreadyResetPasswordGuard],

                data: {
                    expectedRole: ['sponsor','ops']
                },
            },
            {
                path: 'account-activation',
                component: AccountActivationComponent,
                canActivate: [AuthenticationGuard, AlreadyRegisteredOnBlockchainGuard],

                data: {
                    expectedRole: ['sponsor','ops']
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
            {path: '', redirectTo: 'account', pathMatch: 'full'},
            {path: 'account', component: AccountComponent},
            {path: 'farmers', component: FarmersComponent},
            {path: 'assets', component: AssetsComponent},
            {path: 'assets/:assetId', component: AssetViewComponent},

            {path: 'assets-pool-list', component: AssetPoolListComponent},
            {path: 'assets-pool-view/:assetPoolId', component: AssetPoolViewComponent},

            {path: 'assets-pool-create', component: AssetPoolCreateComponent},
            {path: 'account', component: AccountComponent},
            {path: 'wallet', component: WalletComponent},
            {path: 'transfer', component: TransferComponent},
            {path: 'tokens', component: TokensComponent},
            {path: 'tokens/:assetPoolId', component: TokensComponent},
            {path: 'password-change', component: PasswordChangeComponent},
            {path: 'user-create', component: UserCreateComponent},
            {path: 'user-list', component: UserListComponent},
            {path: 'user-update', component: UserUpdateComponent},


        ]
    },
    {path: '**', redirectTo: ''}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
