import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User {
  constructor(
    public userId: string,
    public username: string,
    public firstname: string,
    public lastname: string,
    public role: string,
    public address: string,
    public email: string,
    public gender: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient: HttpClient  ) {  }

  getUsers() {
    const username = 'javainuse';
    const password = 'password';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User[]>('http://localhost:8090/users', {headers});
  }

  public deleteUser(user) {
    const username = 'javainuse';
    const password = 'password';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<User>('http://localhost:8090/users' + '/' + user.Id, {headers});
  }

  public createUSer(user) {
    const username = 'javainuse';
    const password = 'password';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<User>('http://localhost:8090/users', user, {headers});
  }
}
