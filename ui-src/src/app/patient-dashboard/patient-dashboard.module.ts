import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientRoutingModule } from './patientdashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,PatientRoutingModule
  ],
  declarations: [PatientDataComponent]
})
export class PatientDashboardModule { }
