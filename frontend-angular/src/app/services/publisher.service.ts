import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Publisher } from '../models/publisher';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private BASE_URL = 'http://localhost:8090/publisher/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPublishers() {
    return this.http.get(this.BASE_URL + 'all').pipe(map((res: Publisher[]) => res ));
  }

  getPublisherById(publisherId: string) {
    return this.http.get(this.BASE_URL + publisherId)
      .pipe(map((res: Publisher) => res ));
  }

  insertPublisher(publisher: Publisher) {
    return this.http.post<Publisher>(this.BASE_URL + 'add', JSON.stringify(publisher), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  updatePublisher(publisher: Publisher) {
    return this.http.put<Publisher>(this.BASE_URL + 'update', JSON.stringify(publisher), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  deletePublisher(publisher: Publisher) {
    return this.http.delete(this.BASE_URL + 'delete/' + publisher.id, this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }
}
