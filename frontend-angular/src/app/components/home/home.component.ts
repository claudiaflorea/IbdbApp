import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
