import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Subscription, Subject } from 'rxjs';
import { FilterPipe } from '../../filter.pipe';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  books: Book[];
  booksSubscription: Subscription;
  result: any[] = [];
  searchText : any;
  show = false;

  constructor(
    public bookService: BookService,
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

    console.log('******************** ', this.authService.loggedInUser);
  }

  filterBooks() {
    console.log('BOOKS:::::', this.books);
    for(let b of this.books) {
      if((b.title.toLowerCase().indexOf(this.searchText) > -1) || (b.isbn.indexOf(this.searchText) > -1) ) {
        this.result.push(b);
        this.show = true;
      } 
    }
  }

  ngOnChanges() {
  
  }

  goToBookPage(book: Book) {
    console.log(book.bookId);
    this.router.navigate(['/book', book.bookId]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
