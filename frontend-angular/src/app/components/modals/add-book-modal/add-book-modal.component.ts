import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subcategory } from 'src/app/models/subcategory';
import { Category } from 'src/app/models/category';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {

  @Input() id: number;
  addBookForm: FormGroup;
  books: Book[];
  subcategories: any;
  categories: Category[];
  selectedCategory: Subcategory;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public bookService: BookService,
    public subcategoryService: SubcategoryService
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
      selectedCategory: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.addBookForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
    this.subcategoryService.getSubcategories().subscribe( data => {
   //   console.log('+++++++++++++++', data);
      this.subcategories = data;
   //   console.log('------------', this.subcategories);
    });

  }

  onSelect(subcategoryId) {
   this.selectedCategory = null;
   // tslint:disable-next-line: prefer-for-of
   for (let i = 0; i < this.subcategories.length; i++) {
      if (this.subcategories[i].subcategoryId === subcategoryId) {
        this.selectedCategory = this.subcategories[i];
        console.log('/////////////', this.selectedCategory);
      }
    }
}

}
