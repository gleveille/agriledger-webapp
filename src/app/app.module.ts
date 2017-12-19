import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';

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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";
import { HeaderComponent } from './shared/header/header.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { Page403Component } from './shared/page403/page403.component';
import { IssuerRegistrationComponent } from './components/issuer-registration/issuer-registration.component';
import {AlreadyResetPasswordGuard} from "./guards/onboarding-guard/already-reset-password.guard";
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
import { AssetPoolViewComponent } from './components/asset-pool-view/asset-pool-view.component';
import { AssetPoolListComponent } from './components/asset-pool-list/asset-pool-list.component';
import { AssetPoolCreateComponent } from './components/asset-pool-create/asset-pool-create.component';
import { ModalModule } from 'ngx-bootstrap';
import { TokensComponent } from './components/tokens/tokens.component';
import {TokenService} from "./services/token.service";
import { AlertModule } from 'ngx-bootstrap';
import { TransferComponent } from './components/transfer/transfer.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslationService} from "./services/translation.service";
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserListComponent } from './components/user-list/user-list.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/translations/', '.json');
}
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
    AssetPoolViewComponent,
    AssetPoolListComponent,
    AssetPoolCreateComponent,
    TokensComponent,
    TransferComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    ToastyModule.forRoot(),
    NgProgressModule,
      ModalModule.forRoot(),
      AlertModule.forRoot(),
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      })

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
      TranslationService,
      AuthenticationGuard,
      DashboardAuthorizationGuard,
      AlreadyAuthenticatedGuard,
      AlreadyResetPasswordGuard,
      AlreadyRegisteredOnBlockchainGuard,
      AlreadyAnIssuerGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
