import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent} from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import {  HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './component/carousel.component';
import { ProfileComponent } from './component/profile/profile.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatRadioModule} from '@angular/material/radio';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './component/categories/categories.component';
import { QuestionComponent } from './component/question/question.component';
import { CoursesComponent } from './component/courses/courses.component';
import { StarExamComponent } from './component/star-exam/star-exam.component';
import { MasterCourseComponent } from './component/master-course/master-course.component';
import { GraduateCourseComponent } from './component/graduate-course/graduate-course.component';
import { OneCourseComponent } from './component/one-course/one-course.component';
import { SpeciaCourseComponent } from './component/specia-course/specia-course.component';
import { QuestionBookComponent } from './component/question-book/question-book.component';
import { ResultComponent } from './component/result/result.component';


const materials=[MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule,]


@NgModule({
   
    declarations: [
        HomeComponent,
        CarouselComponent,
        ProfileComponent,
        CategoriesComponent,
        QuestionComponent,
        CoursesComponent,
        StarExamComponent,
        MasterCourseComponent,
        GraduateCourseComponent,
        OneCourseComponent,
        SpeciaCourseComponent,
        QuestionBookComponent,
        ResultComponent,
        
      
       
    ],
    exports: [
        HomeComponent,
        CarouselComponent,
       
        
    ],
    imports: [
        CommonModule,
        SharedModule,
        SlickCarouselModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule ,
        MatToolbarModule,
        FormsModule,
        RouterModule
       
    ]
})
export class HomeModule { }
