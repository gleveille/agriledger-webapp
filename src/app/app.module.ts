import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './shared/components.module';

import { AppComponent } from './app.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { LandingComponent } from './components/landing/landing.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import {DashboardSponserComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {UserService} from "./services/user.service";
import {ToastyModule} from 'ng2-toasty';
import {ToastService} from "./services/toast.service";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {DashboardAuthorizationGuard} from "./guards/dashboardAuthorization.guard";
import {AlreadyAuthenticatedGuard} from "./guards/already-authenticated.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";
import { HeaderComponent } from './shared/header/header.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { Page403Component } from './page403/page403.component';
import { IssuerRegistrationComponent } from './issuer-registration/issuer-registration.component';
import {AlreadyChangedPasswordGuard} from "./guards/onboarding-guard/already-changed-password.guard";
import {AlreadyRegisteredOnBlockchainGuard} from "./guards/onboarding-guard/already-registered-on-blockchain.guard";
import {AlreadyAnIssuerGuard} from "./guards/onboarding-guard/already-an-issuer.guard";
import { AssetsComponent } from './assets/assets.component';
import { AssetPoolComponent } from './asset-pool/asset-pool.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TableListComponent,
    DashboardSponserComponent,
    LandingComponent,
    LoginComponent,
    PasswordChangeComponent,
    PasswordResetComponent,
    AccountActivationComponent,
    HeaderComponent,
    OnboardingComponent,
    Page403Component,
    IssuerRegistrationComponent,
    AssetsComponent,
    AssetPoolComponent,
    WalletComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ToastyModule.forRoot()

  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
      },
      UserService,
      ToastService,
      AuthenticationGuard,
      DashboardAuthorizationGuard,
      AlreadyAuthenticatedGuard,
      AlreadyChangedPasswordGuard,
      AlreadyRegisteredOnBlockchainGuard,
      AlreadyAnIssuerGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
