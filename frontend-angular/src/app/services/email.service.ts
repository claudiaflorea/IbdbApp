import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private BASE_URL = 'http://localhost:8090/contact/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http :HttpClient) { }
  
  sendEmail(contact :Contact): Observable<any> {
    return this.http.post<Contact>(this.BASE_URL + 'send', JSON.stringify(contact), this.httpOptions)
    .pipe(map((resp: any) => resp ));
  }

}