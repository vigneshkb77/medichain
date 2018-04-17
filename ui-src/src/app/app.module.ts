import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardModule } from './doctor-dashboard/doctor-dashboard.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { PatientDashboardModule } from './patient-dashboard/patient-dashboard.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DoctorDashboardModule,
    AuthModuleModule,
    PatientDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
