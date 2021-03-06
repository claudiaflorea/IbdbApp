import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAccount } from '../models/userAccount';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private userAccountUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private userUrl = 'http://localhost:8080/api/test/user';
  private operatorUrl = 'http://localhost:8080/api/test/operator';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) {
    this.userAccountUrl = 'http://localhost:8090/userAccount';
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getOperatorBoard(): Observable<string> {
      return this.http.get(this.operatorUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
      return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  public findAll(): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>(this.userAccountUrl);
  }

  public save(userAccount: UserAccount) {
    return this.http.post<UserAccount>(this.userAccountUrl, userAccount);
  }

  getUsers() {
    return this.http
      .get(this.userAccountUrl + '/all')
      .pipe(map((res: UserAccount[]) => res));
  }

  getUserById(userId: string) {
    return this.http
      .get(this.userAccountUrl + userId)
      .pipe(map((res: UserAccount) => res));
  }

  insertUser(user: UserAccount) {
    return this.http
      .post<UserAccount>(
        this.userAccountUrl + '/add',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(map((resp: any) => resp));
  }

  updateUser(user: UserAccount) {
    return this.http
      .put<UserAccount>(
        this.userAccountUrl + '/update',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(map((resp: any) => resp));
  }

  deleteUser(user: UserAccount) {
    return this.http
      .delete(this.userAccountUrl + '/delete/' + user.id, this.httpOptions)
      .pipe(map((resp: any) => resp));
  }
}
