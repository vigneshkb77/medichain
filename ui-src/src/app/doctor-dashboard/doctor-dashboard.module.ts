import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertDataComponent } from './insert-data/insert-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InsertDataComponent],
  exports:[InsertDataComponent]
})
export class DoctorDashboardModule { }
