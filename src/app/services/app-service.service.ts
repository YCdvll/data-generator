import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getData(url: string) {
    return this.http.get<string>(url, this.httpOptions);
  }

  getName(url: string, params: string) {
    return this.http.get<string>(url + "?name=" + params, this.httpOptions);
  }
}
