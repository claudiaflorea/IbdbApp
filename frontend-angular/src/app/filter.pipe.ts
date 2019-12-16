import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models/book';
import { BookService } from './services/book.service';
import { Subscription } from 'rxjs';
@Pipe({ name: 'filter'})

export class FilterPipe implements PipeTransform {
  books: Book[];
  booksSubscription: Subscription;

  constructor(public bookService: BookService) { }

  transform(books: any[], searchText: string): any[] {
    if (!books) { return []; }
    if (!searchText) {
      return books;
    }

    //searchText = searchText.toLowerCase();
    return books.filter( book => {
      return book.title.toLowerCase().includes(searchText);
    });
   }
}
