import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jobDesc } from '../models/jobDesc.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  apiURL = 'http://10.100.151.70:5000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  httpOptionsFile = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
  };

  constructor(private httpClient: HttpClient) { }

  public uploadJobDescription(addedJob: jobDesc): Observable<any> {
    console.log('In api-call.service : uploadJobDescription');
    return this.httpClient.post(`${this.apiURL}/uploadJobDescription`, JSON.stringify(addedJob), this.httpOptions);
  }

  public getJobDescriptionIds(): Observable<any> {
    console.log('In api-call.service : getJobDescriptionIds');
    return this.httpClient.get<any>(`${this.apiURL}/getJobDescriptionIds`, this.httpOptions);
  }

  public getJobDescriptionById(juid: string): Observable<any> {
    console.log('In api-call.service : getJobDescriptionById ');
    return this.httpClient.get<any>(`${this.apiURL}/getJobDescriptionById/${juid}`, this.httpOptions);
  }

  public postFile(filesToUpload: FileList, requestedJobId: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', filesToUpload[0], filesToUpload[0].name);
    formData.append('juid', requestedJobId);
    return this.httpClient.post(`${this.apiURL}/uploadResumes`, formData);
  }

  public getAppliedResumes(juid: string): Observable<any> {
    console.log('In api-call.service : getAppliedResumes ');
    return this.httpClient.get<any>(`${this.apiURL}/getResumeDetailByAttachedJuid/${juid}`, this.httpOptions);
  }

  public getCurrentProfileShortlisted(profileId: string): Observable<any> {
    console.log('In api-call.service : getCurrentProfileShortlisted ');
    return this.httpClient.get<any>(`${this.apiURL}/shortlistProfile/${profileId}`, this.httpOptions);
  }

}
