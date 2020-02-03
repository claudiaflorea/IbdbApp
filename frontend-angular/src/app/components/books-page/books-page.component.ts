import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy {

  books: Book[];
  fictionBooks: Book[];
  nonFictionBooks: Book[];
  booksSubscription: Subscription;
  categorySubscription: Subscription;
  subscriptions: Subscription[] = [];
  nonFictionSubscription: Subscription;
  book: Book;
  category: Category;
  categ: any;

  constructor(
    public bookService: BookService,
    private router: Router,
    public route: ActivatedRoute,
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

    this.categorySubscription =  this.route.params.subscribe(
      (params: Params) => {
        this.bookService.getListedBooksByCategoryId(+params['categoryId']).subscribe( data => {
          if (+params['categoryId'] === 300) {
            this.fictionBooks = data;
          } else if (+params['categoryId'] === 301) {
            this.nonFictionBooks = data;
          } else {
            this.books = data;
           }
        });
      }
    );
    this.subscriptions.push(this.categorySubscription);

    this.categorySubscription =  this.route.params.subscribe(
      (params: Params) => {
        this.bookService.getListedBooksByCategoryId(+params['subcategoryId']).subscribe( data => {
          this.books = data;
        });
      }
    );
    this.subscriptions.push(this.categorySubscription);
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
