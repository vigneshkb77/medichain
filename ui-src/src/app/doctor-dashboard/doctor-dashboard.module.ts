import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { DoctorRoutingModule } from './doctordashboard-routing.module';
import { RetrieveDataComponent } from './retrieve-data/retrieve-data.component';

@NgModule({
  imports: [
    CommonModule,DoctorRoutingModule
    
  ],
  declarations: [InsertDataComponent, RetrieveDataComponent],
  exports:[InsertDataComponent]
})
export class DoctorDashboardModule { }
