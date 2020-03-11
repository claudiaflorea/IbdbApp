import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Subcategory } from 'src/app/models/subcategory';
import { Author } from 'src/app/models/author';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { Publisher } from 'src/app/models/publisher';
import { AuthorService } from 'src/app/services/author.service';
import { PublisherService } from 'src/app/services/publisher.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  book: Book;
  bookSubscription: Subscription;
  subcategorySubscription: Subscription;
  publisherSubscription: Subscription;
  auhtorSubscription: Subscription;
  books: Book[];
  subcategories: Subcategory[];
  authors: Author[];
  publishers: Publisher[];
  selectedAuthor : Author;
  selectedPublisher : Publisher;
  selectedCategory : Subcategory;
  shouldShow = false;

  author: any;
  publisher: any;
  categ: any;

  @ViewChild("booksModal", {static: false}) 
  private booksModal: TemplateRef<any>;

  constructor(
    private bookService: BookService, 
    private subcategoryService: SubcategoryService,
    private publisherService: PublisherService,
    private authorService: AuthorService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.bookSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
    this.subcategorySubscription = this.subcategoryService.getSubcategories().subscribe(data => {
      this.subcategories = data;
    });
    this.publisherSubscription = this.publisherService.getPublishers().subscribe(data => {
      this.publishers = data;
    });
    this.auhtorSubscription = this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  //compareFn = this.compareAuthor.bind(this)

  compareAuthor(a, b) {
    return !a || !b ? false : a.authorId === b.authorId;
  }

  comparePublisher(a, b) {
    return !a || !b ? false : a.publisherId === b.publisherId;
  }

  compareCategory(a, b) {
    return !a || !b ? false : a.id === b.id;
  }

  onAdd() {
    this.book = new Book();
    this.selectedAuthor = null;
    this.selectedCategory = null;
    this.selectedPublisher = null;
    this.shouldShow = true;
    this.modalService.open(this.booksModal);
  }

  onUpdate(book: Book) {
    this.book = book;
    this.book.publishDate = book.publishDate;
    this.selectedAuthor = book.author;
    this.selectedPublisher = book.publisher;
    this.selectedCategory =  book.subcategory;
    this.shouldShow = true;
    this.modalService.open(this.booksModal);
  }

  onDelete(book: Book) {
    this.bookService.deleteBook(book).subscribe(data => { 
      console.log(data, 'was deleted');
      location.reload(); 
    });
  }

  onSubmit() {
    this.book.author = this.selectedAuthor;
    this.book.publisher = this.selectedPublisher;
    this.book.subcategory = this.selectedCategory;
    this.book.bookId? this.updateItem() : this.insertItem() ;
  }

  insertItem() {
    this.bookService.insertBook(this.book).subscribe(data => {
      console.log(data);
      this.shouldShow = false;
      location.reload();
    });
  }

  updateItem() {
    this.bookService.updateBook(this.book).subscribe(data => {
      this.shouldShow = false;
      location.reload();
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
    this.publisherSubscription.unsubscribe();
    this.auhtorSubscription.unsubscribe();
    this.subcategorySubscription.unsubscribe();
  }

}
