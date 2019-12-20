import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.css']
})
export class EditBookModalComponent implements OnInit {

  @Input() id: number;
  editBookForm: FormGroup;
  books: Book[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public bookService: BookService
  ) {
    this.createForm();
   }

  private createForm() {
    this.editBookForm = this.formBuilder.group({
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
    this.activeModal.close(this.editBookForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

}
