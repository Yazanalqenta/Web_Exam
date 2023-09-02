import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AuthservicesService } from './auth/services/authservices.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from 'angular-local-storage';


@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    SharedModule,
    RouterModule,
    HomeModule
  ],
  providers: [
    AuthservicesService,
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
