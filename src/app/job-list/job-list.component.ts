import { Component, OnInit } from '@angular/core';

import { jobDesc } from '../models/jobDesc.model';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  public jobList: jobDesc[];

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit() {
    this.apiCallService.getJobDescriptionIds().subscribe(
      (val) => {
        console.log('GET call successful value returned in body', val);
        this.jobList = val.result;
      },
      (res) => {
        console.log('GET call in error', res);
      },
      () => {
        console.log('The GET observable is now completed.');
      });
  }

}
