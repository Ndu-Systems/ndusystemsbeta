import { Injectable } from '@angular/core';
import { EMAIL } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  API_PATH = EMAIL;
  constructor(private httpClient:HttpClient ) { }

  sendEmail(email):Observable<any>{
       return this.httpClient.post(this.API_PATH, email)
  }
}
