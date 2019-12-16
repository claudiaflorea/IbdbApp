import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { FilterPipe} from '../../filter.pipe';
import { Router } from '@angular/router';
import { BooksPageComponent } from '../books-page/books-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;
  @Input() book: Book;

  constructor(public bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

   // console.log('**************', this.book.id);
  }

  goToBookPage() {
    this.router.navigate(['/book' + this.book.id]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
