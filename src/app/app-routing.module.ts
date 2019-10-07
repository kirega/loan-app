import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChartsComponent} from './charts/charts.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoanOfficerComponent} from './loan-officer/loan-officer.component';
import {IndividualReportComponent} from './individual-report/individual-report.component';


const routes: Routes = [
  {
    path: 'index',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'officer',
        component: LoanOfficerComponent
      },
      {
        path: 'officer-details',
        component: IndividualReportComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
