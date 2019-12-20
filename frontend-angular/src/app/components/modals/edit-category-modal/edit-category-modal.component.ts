import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrls: ['./edit-category-modal.component.css']
})
export class EditCategoryModalComponent implements OnInit {

  @Input() id: number;
  editCategoryForm: FormGroup;
  categories: Category[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public categoryService: CategoryService
  ) {
    this.createForm();
  }

  private createForm() {
    this.editCategoryForm = this.formBuilder.group({
      categoryId: '',
      categoryName: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.editCategoryForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }
}
