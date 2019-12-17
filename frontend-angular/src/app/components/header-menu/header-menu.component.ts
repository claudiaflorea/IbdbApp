import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;
  categories: Category[];
  category: Category;
  subcategories: Subcategory[];
  subcategory: Subcategory;

  constructor( private router: Router, public bookService: BookService) { }

  showContact() {
  }

  ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  sortByFictionCategory(book: Book, category: Category) {
    console.log('**************', book);
    console.log('+++++++++++++++', category);
    this.router.navigate(['/books', category[0].categoryId]);
  }
  sortByNonFictionCategory(book: Book, category: Category) {
    console.log('+++++++++++++++', book);
    this.router.navigate(['/books', category[1].categoryId]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
