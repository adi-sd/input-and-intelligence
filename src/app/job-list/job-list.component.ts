import { Component, OnInit } from '@angular/core';

import { jobDesc } from '../models/jobDesc.model';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobList = [
    {
      jobName : "Job1"
    },
    {
      jobName : "Job2"
    },
    {
      jobName : "Job3"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
