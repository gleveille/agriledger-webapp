import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './shared/components.module';

import { AppComponent } from './app.component';

import { AccountComponent } from './components/account/account.component';
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
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { Page403Component } from './shared/page403/page403.component';
import { IssuerRegistrationComponent } from './components/issuer-registration/issuer-registration.component';
import {AlreadyChangedPasswordGuard} from "./guards/onboarding-guard/already-changed-password.guard";
import {AlreadyRegisteredOnBlockchainGuard} from "./guards/onboarding-guard/already-registered-on-blockchain.guard";
import {AlreadyAnIssuerGuard} from "./guards/onboarding-guard/already-an-issuer.guard";
import { AssetsComponent } from './components/assets/assets.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { FarmersComponent } from './components/farmers/farmers.component';
import {ErrorHandlerService} from "./services/error-handler.service";
import {FarmerService} from "./services/farmer.service";
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ErrorShowComponent } from './shared/error-show/error-show.component';
import {AssetsService} from "./services/assets.service";
import {AssetsPoolService} from "./services/assets-pool.service";
import {WalletService} from "./services/wallet.service";
import { AssetViewComponent } from './components/asset-view/asset-view.component';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { TxnTypePipe } from './pipes/txn-type.pipe';
import { TruncateBalancePipe } from './pipes/truncate-balance.pipe';
import { AssetPoolViewComponent } from './components/asset-pool-view/asset-pool-view.component';
import { AssetPoolListComponent } from './components/asset-pool-list/asset-pool-list.component';
import { AssetPoolCreateComponent } from './components/asset-pool-create/asset-pool-create.component';
import { XasPipe } from './pipes/xas.pipe';
import { ModalModule } from 'ngx-bootstrap';
import { TokensComponent } from './components/tokens/tokens.component';
import {TokenService} from "./services/token.service";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
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
    WalletComponent,
    FarmersComponent,
    SpinnerComponent,
    ErrorShowComponent,
    AssetViewComponent,
    TxnTypePipe,
    TruncateBalancePipe,
    AssetPoolViewComponent,
    AssetPoolListComponent,
    AssetPoolCreateComponent,
    XasPipe,
    TokensComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ToastyModule.forRoot(),
    NgProgressModule,
      ModalModule.forRoot()

  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
      },

      { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true },
      ErrorHandlerService,
      UserService,
      ToastService,
      FarmerService,
      AssetsService,
      AssetsPoolService,
      WalletService,
      TokenService,
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
