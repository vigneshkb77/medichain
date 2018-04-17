import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path:'auth',
      loadChildren:'app/auth-module/auth-module.module#AuthModuleModule'
  },
  {
    path: 'doctor',
    loadChildren: 'app/doctor-dashboard/doctor-dashboard.module#DoctorDashboardModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


