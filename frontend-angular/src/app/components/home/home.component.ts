import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Subscription, Subject } from 'rxjs';
import { FilterPipe } from '../../filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  books: Book[];
  booksSubscription: Subscription;
  result: any[];

  constructor(public bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

    // console.log('**************', this.book.id);
  }

  handleFilter(value) {
    console.log('BOOKS:::::', this.books);
    this.books.filter(
      (b) => {
        if (b.title.toLowerCase().indexOf(value) > -1) {
          this.result.push(b);
        } else {
          this.result = null;
        }
        return this.result;
      }
    );
    console.log('+++++++++++++++++', this.result);
  }

  ngOnChanges() {
    this.handleFilter(document.getElementById('searchText').valueOf());
  }

  goToBookPage(book: Book) {
    console.log(book.bookId);
    this.router.navigate(['/book', book.bookId]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
