import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {GradeComponent} from './grade/grade.component';
import {SchoolComponent} from './school/school.component';
import {SubjectComponent} from './subject/subject.component';
import {LastpageComponent} from './lastpage/lastpage.component';
import { AuthGuard } from './auth.guard';





const routes: Routes = [
  
{path:'',redirectTo:'school',pathMatch:"full"},
{path:'school',component:SchoolComponent},
{path:'login',component:LoginComponent},
{path:'grade',component:GradeComponent,canActivate: [AuthGuard] },
{path:'subject',component:SubjectComponent},
{path:'lastpage',component:LastpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
