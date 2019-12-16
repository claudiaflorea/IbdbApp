import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  currentBook: Book;
  book: Book;
  booksSubscription: Subscription;

  constructor(
    public bookService: BookService,
    public route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookService.getBookById(+params['id']).subscribe( data => {
          this.book = data;
        });
      }
    );

/*
    this.booksSubscription = this.bookService.getBookById(this.id).subscribe(data => {
      this.currentBook = data;
    });
    */
  }

}
