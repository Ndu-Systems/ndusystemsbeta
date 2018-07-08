import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { EmailService } from './shared/services/email.service';
import { HttpClientModule } from '@angular/common/http';
 
 
@NgModule({
   declarations: [
      AppComponent,
      routingComponents
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      MDBBootstrapModule.forRoot(),
      AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
