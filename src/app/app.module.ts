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
import { DashboardSponserComponent } from './dashboard-sponser/dashboard-sponser.component';
import { LandingComponent } from './landing/landing.component';
import { LoginSponserComponent } from './login-sponser/login-sponser.component';
import { LoginOpsComponent } from './login-ops/login-ops.component';
import { DashboardOpsComponent } from './dashboard-ops/dashboard-ops.component';

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
