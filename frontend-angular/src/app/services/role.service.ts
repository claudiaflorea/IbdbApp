import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../models/review';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private BASE_URL = 'http://localhost:8090/role/';
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(this.BASE_URL + 'all').pipe(map((res: Review[]) => res ));
  }

  getRoleById(roleId: string) {
    return this.http.get(this.BASE_URL + roleId)
      .pipe(map((res: Review[]) => res ));
  }

}
