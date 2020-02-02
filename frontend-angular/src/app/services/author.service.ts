import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Author } from '../models/author';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private BASE_URL = 'http://localhost:8090/author/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get(this.BASE_URL + 'all').pipe(map((res: Author[]) => res ));
  }

  getListedAuthorsByCategoryId(categoryId: string) {
    return this.http.get(this.BASE_URL + 'all/listed/' + 
    categoryId
    )
      .pipe(map((res: Author[]) => res ));
  }

  getAuthorById(authorId: string) {
    return this.http.get(this.BASE_URL + authorId)
      .pipe(map((res: Author) => res ));
  }

  insertAuthor(author: Author) {
    return this.http.post<Author>(this.BASE_URL + 'add', 
    JSON.stringify(author), 
    this.httpOptions
    )
      .pipe(map((resp: any) => resp ));
  }

  updateAuthor(author: Author) {
    return this.http.put<Author>(this.BASE_URL + 'update', JSON.stringify(author), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  deleteAuthor(author: Author) {
    return this.http.delete(this.BASE_URL + 'delete/' + author.id, this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }
}
