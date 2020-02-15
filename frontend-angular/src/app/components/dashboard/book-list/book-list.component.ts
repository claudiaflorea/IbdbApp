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
  selectedCategory: any;
  shouldShow = false;

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
      console.log('BOOKS: ', this.books);
    });
    this.subcategorySubscription = this.subcategoryService.getSubcategories().subscribe(data => {
      this.subcategories = data;
      console.log('SUBCATEGORIES: ', this.subcategories);
    });
    this.publisherSubscription = this.publisherService.getPublishers().subscribe(data => {
      this.publishers = data;
      console.log('PUBLISHERS: ', this.publishers);
    });
    this.auhtorSubscription = this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
      console.log('AUTHORS: ', this.authors);
    });
  }

  onAdd() {
    this.book = new Book();
    this.selectedCategory = null;
    this.shouldShow = true;
    this.modalService.open(this.booksModal);
  }

  onUpdate(book: Book) {
    this.book = book;
    this.book.publishDate = book.publishDate;
    this.selectedCategory = "" + book.subcategory.id;
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
    if (this.book.bookId != undefined) {
      this.updateItem();
    } else {
      this.insertItem();
    }
  }

  insertItem() {
    this.bookService.insertBook(this.book).subscribe(data => {
      this.shouldShow = false;
      /* Reload page to display newly added book */
      location.reload();
    });
  }

  updateItem() {
    this.bookService.updateBook(this.book).subscribe(data => {
      this.shouldShow = false;
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

/*
   addBook() {
    console.log('Add new book');
    const modalRef = this.modalService.open(AddBookModalComponent);
    modalRef.componentInstance.id = 12;
    modalRef.result.then((result) => {
      console.log(result);
      this.books.push(result);
      this.bookService.insertBook(result);
      this.bookService.getBooks().subscribe( data => {
        console.log('DATA!!! ', data);
        this.books = data;
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  editBook(book: Book) {
    console.log('Edit this book');
    const modalRef = this.modalService.open(EditBookModalComponent);
    modalRef.componentInstance.book.bookId = book.bookId;
    modalRef.componentInstance.book.title = book.title;
    modalRef.componentInstance.book.isbn = book.isbn;
    modalRef.componentInstance.book.author = book.author;
    modalRef.componentInstance.book.publisher = book.publisher;
    modalRef.componentInstance.book.publishDate = book.publishDate;
    modalRef.componentInstance.book.category = book.category;
     
  }

  deleteBook(book: Book) {
    console.log('Delete this book');
    const modalRef = this.modalService.open(DeleteBookModalComponent);
    modalRef.componentInstance.id = 14;
  }
*/
  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
    this.publisherSubscription.unsubscribe();
    this.auhtorSubscription.unsubscribe();
    this.subcategorySubscription.unsubscribe();
  }

}
