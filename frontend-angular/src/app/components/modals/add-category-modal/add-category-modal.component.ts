import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent implements OnInit {

  @Input() id: number;
  addCategoryForm: FormGroup;
  categories: Category[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public categoryService: CategoryService
  ) {
    this.createForm();
  }

  private createForm() {
    this.addCategoryForm = this.formBuilder.group({
      categoryId: '',
      categoryName: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.addCategoryForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }
}
