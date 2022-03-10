import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpclientComponent } from './httpclient/httpclient.component';

import { MyserviceService } from './myservice.service';
import { HttpclientService } from './httpclient.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    HttpclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService, HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
