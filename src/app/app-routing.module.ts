import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListComponent } from './job-list/job-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'openPositions', component: JobListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
