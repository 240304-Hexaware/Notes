import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  httpClient: HttpClient;
  baseUrl: string = "http://localhost:8080"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  create(data: Obj): Observable<Object> {
    console.log("posting...")
    return this.httpClient.post(this.baseUrl + "/new", JSON.stringify(data), this.httpOptions)
  }

  get(): Observable<Object> {
    console.log("getting...")
    return this.httpClient.get(this.baseUrl + "/get", this.httpOptions)
  }



}

export interface Obj {
  value: string;
}