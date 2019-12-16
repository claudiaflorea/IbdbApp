import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BASE_URL = 'http://localhost:8090/book/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBooks() : Observable<Book[]> {
    return this.http.get(this.BASE_URL + 'all').pipe(map((res: Book[]) => res ));
  }

  getListedBooksByCategoryId(categoryId: string) {
    return this.http.get(this.BASE_URL + 'all/listed/' + categoryId)
      .pipe(map((res: Book[]) => res ));
  }

  getBookById(bookId: number) {
    return this.http.get(this.BASE_URL + bookId)
      .pipe(map((res: Book) => res ));
  }

  insertBook(book: Book) {
    return this.http.post<Book>(this.BASE_URL + 'add', JSON.stringify(book), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  updateBook(book: Book) {
    return this.http.put<Book>(this.BASE_URL + 'update', JSON.stringify(book), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  deleteBook(book: Book) {
    return this.http.delete(this.BASE_URL + 'delete/' + book.bookId, this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }
}
