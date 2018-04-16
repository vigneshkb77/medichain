import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DoctorDashboardModule } from './doctor-dashboard/doctor-dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DoctorDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
