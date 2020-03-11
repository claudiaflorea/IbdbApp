import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})  

export class GlobalService {

books: Book[] = [];
filteredBooks : any[];
booksSubscription: Subscription;

constructor(  
    public bookService: BookService,
    private router: Router
    ) {}

ngOnInit() {
    
}

filterBooks(id: Number) {
    console.log('------------> initial books', this.books);
    console.log('`````````', id);
    if (id) {
      this.booksSubscription = this.bookService.getBooks()
        .subscribe(
          data => {
            console.log('!!!!!!!!!!!! ', data);
            for(let b of data) {
              if(b.subcategory.category.id === id) {
                this.books.push(b);
              }
            }
          }
      );
      console.log('------------> filtered books', this.books);
    } else {
        alert('No book found for this category');
    }
    location.reload();
  }
}
