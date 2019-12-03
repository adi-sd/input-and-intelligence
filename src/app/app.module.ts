import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { JobListComponent } from './job-list/job-list.component';
import { HomeComponent } from './home/home.component';
import { JobDescComponent } from './job-list/job-desc/job-desc.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    JobListComponent,
    JobDescComponent,
    HomeComponent,
    ApplicationFormComponent,
    AddJobsComponent,
    ViewProfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
