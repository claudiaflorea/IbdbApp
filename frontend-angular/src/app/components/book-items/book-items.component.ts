import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {

  book: Book;
  publisher: Publisher;
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
          console.log('*********', this.book);
        });
      }
    );
  }

}
