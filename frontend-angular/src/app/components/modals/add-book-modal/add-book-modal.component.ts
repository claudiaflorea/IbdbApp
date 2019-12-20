import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {

  @Input() id: number;
  addBookForm: FormGroup;
  books: Book[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public bookService: BookService
  ) {
    this.createForm();
  }

  private createForm() {
    this.addBookForm = this.formBuilder.group({
      bookId: '',
      title: '',
      isbn: '',
      author: '',
      publisher: '',
      publishDate: '',
      category: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.addBookForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

}
