import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertDataComponent } from './insert-data/insert-data.component';
import { RetrieveDataComponent } from './retrieve-data/retrieve-data.component';


const routes: Routes = [
  {
    path: 'insert',
    component: InsertDataComponent
  },
  {
    path:'retrieve',
    component:RetrieveDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }


