import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LandingComponent } from './landing/landing.component';
import { LoginOpsComponent } from './login-ops/login-ops.component';
import { DashboardOpsComponent } from './dashboard-ops/dashboard-ops.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import {DashboardSponserComponent} from "./dashboard-sponser/dashboard-sponsor.component";
import {LoginSponserComponent} from "./login-sponser/login-sponsor.component";

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TableListComponent,
    NotificationsComponent,
    DashboardSponserComponent,
    LandingComponent,
    LoginSponserComponent,
    LoginOpsComponent,
    DashboardOpsComponent,
    PasswordChangeComponent,
    PasswordResetComponent,
    AccountActivationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
