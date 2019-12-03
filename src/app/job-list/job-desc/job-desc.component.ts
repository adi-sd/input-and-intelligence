import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ApiCallService } from '../../services/api-call.service';
import { jobDesc } from '../../models/jobDesc.model';

@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.css']
})
export class JobDescComponent implements OnInit {

  public requestedJobDesc: jobDesc;
  
  private requestedJobId = this.route.snapshot.paramMap.get('jobId')


  // public requestedJobDesc = {
  //   juid: 'JD_1',
  //   jobName: 'Temp Position',
  //   // tslint:disable-next-line:max-line-length
  //   jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   reqExperience: '5 Years',
  //   reqSkills: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   expectedJoining: '15-Jan-2020',
  // };

  // upload file form code
  public uploadResumes: FormGroup;

  filesToUpload: FileList = null;


  // tslint:disable-next-line:max-line-length
  constructor(private apiCallService: ApiCallService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    // for uploading files
    this.uploadResumes = this.formBuilder.group({
      uploadedFiles: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.apiCallService.getJobDescriptionById(this.requestedJobId).subscribe(
      (val) => {
        console.log('GET call successful value returned in body', val);
        this.requestedJobDesc = val.result;
      },
      (res) => {
        console.log('GET call in error', res);
      },
      () => {
        console.log('The GET observable is now completed.');
      });
  }

  public handleFileInput(files: FileList) {
    console.log(files)
    //this.fileToUpload = files.item(0);
    this.filesToUpload = files;
    console.log(this.filesToUpload);
  }

  uploadFileToActivity() {
    if ( this.filesToUpload != null && this.filesToUpload !== undefined ) {
      this.apiCallService.postFile(this.filesToUpload, this.requestedJobId).subscribe(
        (val) => {
          console.log('POST File call successful value returned in body', val);
          console.log(val);
        },
        (res) => {
          console.log('POST File call in error', res);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
    } else {
        console.log('Failed to capture File')
    }
  }

}
