import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegesterComponent } from './auth/components/regester/regester.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './home/component/home/home.component';
import { ProfileComponent } from './home/component/profile/profile.component';
import { CategoriesComponent } from './home/component/categories/categories.component';
import { QuestionComponent } from './home/component/question/question.component';
import { CoursesComponent } from './home/component/courses/courses.component';
import { StarExamComponent } from './home/component/star-exam/star-exam.component';
import { GraduateCourseComponent } from './home/component/graduate-course/graduate-course.component';
import { MasterCourseComponent } from './home/component/master-course/master-course.component';
import { SpeciaCourseComponent } from './home/component/specia-course/specia-course.component';
import { QuestionBookComponent } from './home/component/question-book/question-book.component';
import { ResultComponent } from './home/component/result/result.component';
import { OneCourseComponent } from './home/component/one-course/one-course.component';

const routes: Routes = [
  {path:"register",component:RegesterComponent},
  {path:"login",component:LoginComponent},
   {path:"home",component:HomeComponent},
   {path:"categories",component:CategoriesComponent},
   {path:"question",component:QuestionComponent},
   {path:"courses",component:CoursesComponent},
   {path:"start-exam",component:StarExamComponent},
  {path:"graduate",component:GraduateCourseComponent},
  {path:"master",component:MasterCourseComponent},
  {path:"profile",component:ProfileComponent},
  {path:"specialcourse",component:SpeciaCourseComponent},
  {path:'book',component:QuestionBookComponent},
  {path:'result',component:ResultComponent},
  {path:"onecourse",component:OneCourseComponent},
  {path:"",component:HomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
