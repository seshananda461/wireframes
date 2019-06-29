import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleOrderComponent } from './single-order/single-order.component';
import { MultipulOrderComponent } from './multipul-order/multipul-order.component';
import { ReportsComponent } from './reports/reports.component';
const routes: Routes = [

  { path: 'SingleOrder', component: SingleOrderComponent },
  { path: 'MultipulOrder', component: MultipulOrderComponent },
  { path: 'Reports', component: ReportsComponent },

  {
    path: '',
    redirectTo: '/SingleOrder',
    pathMatch: 'full'
  },
  { path: '**', component: SingleOrderComponent },
  {
    path: '',
    redirectTo: '/Reports',
    pathMatch: 'full'
  },
  { path: '**', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
