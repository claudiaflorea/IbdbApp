import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { PublisherService } from 'src/app/services/publisher.service';
import { Subcategory } from 'src/app/models/subcategory';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { Publisher } from 'src/app/models/publisher';
import { UserAccount } from 'src/app/models/userAccount';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  greet: string;
  books: any;
  authors: any;
  categories: any;
  subcategories: any;
  publishers: any;
  users: any;


  constructor(
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private publisherService: PublisherService,
    private userService: UserService
    ) {
    this.greet = 'Hi, Admin! What do you want to do today?';
  }
  ngOnInit() {
    this.bookService.getBooks().subscribe((data) =>
      this.books = data.length
    );

    this.authorService.getAuthors().subscribe((data) =>
      this.authors = data.length
    );

    this.publisherService.getPublishers().subscribe((data) =>
      this.publishers = data.length
    );

    this.subcategoryService.getSubcategories().subscribe((data) =>
      this.subcategories = data.length
    );

    this.categoryService.getCategories().subscribe((data) => 
      this.categories = data.length
    );

    this.userService.getUsers().subscribe((data) => 
      this.users = data.length
    );
  }

  goToUsers() {
    this.router.navigateByUrl('/users-manager');
  }
  goToBooks() {
    this.router.navigateByUrl('/books-manager');
  }
  goToAuthors() {
    this.router.navigateByUrl('/authors-manager');
  }
  goToCategories() {
    this.router.navigateByUrl('/categories-manager');
  }
  goToSubcategories() {
    this.router.navigateByUrl('/subcategories-manager');
  }

}
