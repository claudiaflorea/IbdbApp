import { Component, OnInit, Input } from '@angular/core';
import { Subcategory } from 'src/app/models/subcategory';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-add-subcategory-modal',
  templateUrl: './add-subcategory-modal.component.html',
  styleUrls: ['./add-subcategory-modal.component.css']
})
export class AddSubcategoryModalComponent implements OnInit {

  @Input() id: number;
  addSubcategoryForm: FormGroup;
  subcategories: Subcategory[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public subcategoryService: SubcategoryService
  ) {
    this.createForm();
  }

  private createForm() {
    this.addSubcategoryForm = this.formBuilder.group({
      subcategoryId: '',
      subcategoryName: '',
      category: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.addSubcategoryForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

}
