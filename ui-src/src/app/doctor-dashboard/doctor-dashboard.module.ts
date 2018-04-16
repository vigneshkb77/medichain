import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { DoctorRoutingModule } from './doctordashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,DoctorRoutingModule
    
  ],
  declarations: [InsertDataComponent],
  exports:[InsertDataComponent]
})
export class DoctorDashboardModule { }
