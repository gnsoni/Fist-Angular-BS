import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { proWebAppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    proWebAppComponent,
    ContactusComponent,
    DashboardComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [proWebAppComponent]
})
export class AppModule { }
