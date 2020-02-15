import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';
import { GlobalService } from 'src/app/services/globalService.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy, OnChanges {

 
  booksSubscription: Subscription;
  subscriptions: Subscription[] = [];
  books: Book[];
  book: Book;
  category: Category;
  categ: any;

  currentLocation: any;
  lastParameter: any;

  constructor(
    public bookService: BookService,
    private router: Router,
    public route: ActivatedRoute,
    public globalService: GlobalService
    ) { }
  
  ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
      this.books.forEach((b) => {
        if (b.image === null) {
          b.image = '/assets/images/books-images/bookPlaceholder.jpeg';
        }
      });
    });
    this.subscriptions.push(this.booksSubscription);
  }

  ngOnChanges() {
    this.currentLocation = this.router.url;
    this.lastParameter = this.currentLocation.substr(this.currentLocation.lastIndexOf('/') + 1);
    this.globalService.filterBooks(this.lastParameter);
    console.log('------------> ', this.lastParameter);
  }

  goToBook(book: Book) {
    this.router.navigate(['/book', book.bookId]);
  }


  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
