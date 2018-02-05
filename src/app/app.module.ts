import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InterestsComponent } from './components/auth/interests/interests.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterestsComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
