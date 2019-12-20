import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subcategory } from 'src/app/models/subcategory';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-edit-subcategory-modal',
  templateUrl: './edit-subcategory-modal.component.html',
  styleUrls: ['./edit-subcategory-modal.component.css']
})
export class EditSubcategoryModalComponent implements OnInit {


  @Input() id: number;
  editSubcategoryForm: FormGroup;
  subcategories: Subcategory[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public subcategoryService: SubcategoryService
  ) {
    this.createForm();
  }

  private createForm() {
    this.editSubcategoryForm = this.formBuilder.group({
      subcategoryId: '',
      subcategoryName: '',
      category: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.editSubcategoryForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

}
