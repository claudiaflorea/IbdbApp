import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AddBookModalComponent } from '../../modals/add-book-modal/add-book-modal.component';
import { EditBookModalComponent } from '../../modals/edit-book-modal/edit-book-modal.component';
import { DeleteBookModalComponent } from '../../modals/delete-book-modal/delete-book-modal.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  book: Book;
  bookSubscription: Subscription;
  books: Book[];

  constructor(private bookService: BookService, private modalService: NgbModal) { }

  ngOnInit() {
    this.bookSubscription = this.bookService.getBooks().subscribe(data => {
      this.books = data;
      console.log('BOOKS: ', this.books);
    });
  }

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

  editBook() {
    console.log('Edit this book');
    const modalRef = this.modalService.open(EditBookModalComponent);
    modalRef.componentInstance.id = 13;
  }

  deleteBook() {
    console.log('Delete this book');
    const modalRef = this.modalService.open(DeleteBookModalComponent);
    modalRef.componentInstance.id = 14;
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
