import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListComponent } from './job-list/job-list.component';
import { HomeComponent } from './home/home.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { JobDescComponent } from './job-list/job-desc/job-desc.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addJobs', component: AddJobsComponent },
  { path: 'openPositions', component: JobListComponent },
  { path: 'openPositions/:jobId', component: JobDescComponent },
  { path: 'viewProfiles/:jobId', component: ViewProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
