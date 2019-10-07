import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanOfficerComponent } from './loan-officer/loan-officer.component';
import { CardsComponent } from './components/cards/cards.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { IndividualReportComponent } from './individual-report/individual-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartsComponent,
    DashboardComponent,
    LoanOfficerComponent,
    CardsComponent,
    SpinnerComponent,
    IndividualReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
