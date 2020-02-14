import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {

  books: any;
  booksSubscription: Subscription;
  categorySubscription: Subscription;
  categories: any;
  category: Category;
  fictionSubcategories: any;
  nonFictionSubcategories: any;
  subcategory: Subcategory;
  fiction: any;
  nonfiction: any;

  constructor(
    private router: Router,
    public bookService: BookService,
    public categoryService: CategoryService
    ) { }

  showContact() {
  }

  ngOnInit() {
    this.booksSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

    this.categorySubscription = this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.fiction = this.categories[0];
      this.nonfiction = this.categories[1];
      this.fictionSubcategories = this.categories[0].subcategories;
      this.nonFictionSubcategories = this.categories[1].subcategories;
    });
  }

  sortByFictionCategory() {
    console.log('categories::::::: ', this.categories);
    console.log('category 0::::::: ', this.categories[0]);
    this.router.navigate(['/book/all', this.fiction.categoryId]);
  }
  sortByNonFictionCategory() {
    console.log('categories::::::: ', this.categories);
    console.log('category 1::::::: ', this.categories[1]);
    this.router.navigate(['/book/all', this.nonfiction.categoryId]);
  }

  sortBySubcategory() {
    console.log('subcategories.................. ', this.categories[0]);
    console.log('subcategories...................', this.categories[1]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
