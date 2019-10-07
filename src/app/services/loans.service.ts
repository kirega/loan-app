import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http: HttpClient) { }
  getLoans(): Observable<any> {
    return this.http.get(environment.url + '/loans');
  }
  getOfficer(): Observable<any> {
    return this.http.get(environment.url + '/officer');
  }
  getOfficerLoans(id): Observable<any>{
    return this.http.get(`${environment.url}/officer/${id}/loans`);
  }
  getAllOfficerLoans(): Observable<any> {
    return this.http.get(environment.url + '/officer/loans');
  }
}
