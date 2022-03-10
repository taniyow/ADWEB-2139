import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { Httpclient2Component } from './httpclient2/httpclient2.component';

import { MyserviceService } from './myservice.service';
import { HttpclientService } from './httpclient.service';
import { Httpclient2Service } from './httpclient2.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    HttpclientComponent,
    Httpclient2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MyserviceService,
    HttpclientService,
    Httpclient2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
