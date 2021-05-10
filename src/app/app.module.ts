import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GradeComponent } from './grade/grade.component';
import {FormsModule} from '@angular/forms';
import { SchoolComponent } from './school/school.component';
import { SubjectComponent } from './subject/subject.component';
import { LastpageComponent } from './lastpage/lastpage.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './auth.service';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GradeComponent,
    SchoolComponent,
    SubjectComponent,
    LastpageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
  
  

  ],
  providers: [
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
