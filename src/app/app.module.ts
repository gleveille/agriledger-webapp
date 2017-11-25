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
import {AuthorizationGuard} from "./guards/authorization.guard";
import {AlreadyAuthenticatedGuard} from "./guards/already-authenticated.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";

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
      UserService,ToastService,AuthenticationGuard,AuthorizationGuard,AlreadyAuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
