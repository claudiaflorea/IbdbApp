import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { PublisherService } from 'src/app/services/publisher.service';
import { AuthorService } from 'src/app/services/author.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  books: any;
  publishers: any;
  authors: any;
  categories: any;

  constructor(
   public bookService: BookService,
   public publisherService: PublisherService,
   public authorService: AuthorService,
   public subcategoryService: SubcategoryService
  ) { }

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
      this.categories = data.length
    );

  }

}
