import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing-module';

 
@NgModule({
   declarations: [
      AppComponent,
      routingComponents      
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
