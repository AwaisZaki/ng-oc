import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InterestsComponent } from './components/auth/interests/interests.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AdDashboardComponent } from './components/dashboard/ad-dashboard/ad-dashboard.component';
import { MenuComponent } from './components/menues/menu/menu.component';
import {ActiveCampaignsComponent} from './components/dashboard/ad-dashboard/active-campaigns/active-campaigns.component';
import { MaterialModule } from './material.module';
import { AllCompaignsComponent } from './components/dashboard/ad-dashboard/all-compaigns/all-compaigns.component';
import { StatisticsBarComponent } from './components/dashboard/ad-dashboard/statistics-bar/statistics-bar.component';
import { TableComponent } from './components/dashboard/ad-dashboard/table/table.component';




@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    InterestsComponent,
    SignInComponent,
    AdDashboardComponent,
    MenuComponent,
    ActiveCampaignsComponent,
    AllCompaignsComponent,
    StatisticsBarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
