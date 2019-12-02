import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { jobDesc } from '../models/jobDesc.model';
import { ApiCallService } from '../services/api-call.service';


@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {

  private initialJuid = Math.floor(Math.random() * 100000);
  public addJob: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiCallService: ApiCallService) {
    this.addJob = this.formBuilder.group({
      jobName: [null, Validators.required],
      jobDescription: [null, Validators.required],
      reqExperience: [null, Validators.required],
      expectedJoining: [null, Validators.required],
      reqSkills: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  private createJobObject(formDetail: any): void {
    console.log('In createJobObject...');
    const addedJob = new jobDesc(
      this.initialJuid as unknown as string,
      formDetail.value.jobName,
      formDetail.value.jobDescription,
      formDetail.value.reqExperience,
      formDetail.value.expectedJoining,
      formDetail.value.reqSkills,
    );

    this.apiCallService.uploadJobDescription(addedJob).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      (res) => {
        console.log('POST call in error', res);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
}
