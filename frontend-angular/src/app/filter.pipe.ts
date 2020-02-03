import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { Book } from './models/book';
import { BookService } from './services/book.service';
import { Subscription } from 'rxjs';
@Pipe({ name: 'filter'})

export class FilterPipe implements PipeTransform, OnInit {
  books: Book[];
  booksSubscription: Subscription;

  constructor(public bookService: BookService) { }

  transform(books: any[], searchText: string): any[] {
    if (!books) { return []; }
    if (!searchText) {
      return books;
    }

   // searchText = searchText.toLowerCase();
    return books.filter( book => {
      return (book.title.toLowerCase().includes(searchText)
   // || book.author.authorName.toLowerCase().includes(searchText)
    || book.isbn.toLowerCase().includes(searchText));
    });
   }

   ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
      console.log('-----books-----', this.books);
    });
  }


}
