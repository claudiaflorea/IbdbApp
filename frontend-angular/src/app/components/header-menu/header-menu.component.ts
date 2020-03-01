import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';
import { CategoryService } from 'src/app/services/category.service';
import { GlobalService } from 'src/app/services/globalService.service';
import { AuthService } from 'src/app/services/auth.service';

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

  private userSub: Subscription;
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  open: boolean = false;

  constructor(
    private router: Router,
    public bookService: BookService,
    public categoryService: CategoryService,
    public globalService: GlobalService,
    private authService: AuthService
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
    this.router.navigate(['/book/all/', this.fiction.categoryId]);
    this.globalService.filterBooks(this.fiction.categoryId);
  }
  sortByNonFictionCategory() {
    this.router.navigate(['/book/all/', this.nonfiction.categoryId]);
    this.globalService.filterBooks(this.nonfiction.categoryId);
  }

  onLogout() {
    this.authService.loggedIn = false;
    this.authService.isAdmin = false;
    this.authService.loggedInUser = null;
    this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
