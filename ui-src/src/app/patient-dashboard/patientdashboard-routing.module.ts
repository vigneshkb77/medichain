import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientDataComponent } from './patient-data/patient-data.component';


const routes: Routes = [
  {
    path: '',
    component: PatientDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }


