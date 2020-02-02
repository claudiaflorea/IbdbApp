import { Component, OnInit, Input } from '@angular/core';
import { Subcategory } from 'src/app/models/subcategory';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-subcategory-modal',
  templateUrl: './add-subcategory-modal.component.html',
  styleUrls: ['./add-subcategory-modal.component.css']
})
export class AddSubcategoryModalComponent implements OnInit {

  @Input() id: number;
  addSubcategoryForm: FormGroup;
  subcategories: Subcategory[];
  categories: any;
  category: Category;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public subcategoryService: SubcategoryService,
    public categoryService: CategoryService,
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

  changeCategory(category) {
    this.category = this.categories.find(categ => categ.categoryName === category);
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe( data => {
      this.categories = data;
    });
  }

}
