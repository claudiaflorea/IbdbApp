import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})  

export class GlobalService {

books: Book[];

constructor(  
    public bookService: BookService,
    private router: Router
    ) {}

ngOnInit() {
    
}

filterBooks(categoryId?: number): void {
        if (categoryId) {
            this.bookService.getBooks()
            .subscribe(books => this.books = books);
            this.books.filter((book: Book) => {
                console.log('*********category id', book.categoryId);
                book.categoryId === categoryId;
            });
        } else if(categoryId) {
            this.bookService.getBooks()
            .subscribe(books => this.books = books);
            this.books.filter((book: Book) => {
                console.log('*********subcategory id', book.subcategory.id);
                book.subcategory.id === categoryId;
            });
        } else {
            this.bookService.getBooks()
            .subscribe(books => this.books = books);
        }
    }

}



