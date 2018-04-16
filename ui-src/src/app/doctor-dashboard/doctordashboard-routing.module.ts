import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertDataComponent } from './insert-data/insert-data.component';


const routes: Routes = [
  {
    path: '',
    component: InsertDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }


