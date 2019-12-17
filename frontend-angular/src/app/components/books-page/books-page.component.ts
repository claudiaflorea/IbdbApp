import { Component, OnInit, Input } from '@angular/core';
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
export class BooksPageComponent implements OnInit {

  books: Book[];
  booksSubscription: Subscription;
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
    });
  }

  goToBook(book: Book) {
    this.router.navigate(['/book', book.category]);
  }
}
