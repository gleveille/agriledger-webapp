import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import {XasPipe} from "../pipes/xas.pipe";
import {TxnTypePipe} from "../pipes/txn-type.pipe";
import {TruncateBalancePipe} from "../pipes/truncate-balance.pipe";
import {MomentPipe} from "../pipes/moment.pipe";
import {OnboardingStatusPipe} from "../pipes/onboarding-status.pipe";
import {LogService} from "./logger/log.service";
import {LogPublisherService} from "./logger/log-publisher.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AboutUsComponent,
    PrivacyComponent,
    TermsComponent,
    ContactComponent,
    XasPipe,
    TxnTypePipe,
    MomentPipe,
    OnboardingStatusPipe,
    TruncateBalancePipe
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    XasPipe,
    TxnTypePipe,
    MomentPipe,
    OnboardingStatusPipe,
    TruncateBalancePipe
  ],providers:[
      LogService,
        LogPublisherService
    ]
})
export class SharedModule { }
