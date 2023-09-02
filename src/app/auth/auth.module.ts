import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegesterComponent } from './components/regester/regester.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatRadioModule} from '@angular/material/radio';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthservicesService } from './services/authservices.service';



const materials=[MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  OverlayModule,
  MatRadioModule,
  ReactiveFormsModule,
  FormsModule,
  MatToolbarModule,
  RouterModule,


]

@NgModule({
  declarations: [
    
    LoginComponent,
    RegesterComponent,
  ],
  imports: [
    CommonModule,
    materials,
    
  ],
  exports:[
    materials,
  
    LoginComponent,
    RegesterComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    AuthservicesService
  ]
})
export class AuthModule {
  
 }
