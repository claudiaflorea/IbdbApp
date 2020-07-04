import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Subcategory } from 'src/app/models/subcategory';
import { Subscription } from 'rxjs';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit, OnDestroy {

  subcategory: Subcategory;
  subcategorySubscription: Subscription;
  categorySubscription: Subscription;
  subcategories: Subcategory[];
  categories: Category[];
  shouldShow = false;

  @ViewChild("subcategoriesModal", {static: false}) 
  private subcategoriesModal: TemplateRef<any>;
  selectedCategory: any;

  constructor(
    private subcategoryService: SubcategoryService,
    private modalService: NgbModal,
    public categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.subcategorySubscription = this.subcategoryService.getSubcategories().subscribe(data => {
      this.subcategories = data;
    });

    this.categorySubscription = this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  compareCategory(a, b) {
    return !a || !b ? false : a.id === b.id;
  }
  
  onAdd() {
    this.subcategory = new Subcategory();
    this.selectedCategory = null;
    this.shouldShow = true;
    this.modalService.open(this.subcategoriesModal);
  }

  onUpdate(subcategory: Subcategory) {
    this.subcategory = subcategory;
    this.selectedCategory = subcategory.category;
    this.shouldShow = true;
    this.modalService.open(this.subcategoriesModal);
  }

  onDelete(subcategory: Subcategory) {
    this.subcategoryService.deleteSubcategory(subcategory).subscribe(data => { 
    location.reload(); 
    });
  }

  onSubmit() {
    this.subcategory.category = this.selectedCategory;
    this.subcategory.id != undefined ? this.updateItem() : this.insertItem();
  }

  insertItem() {
    this.subcategoryService.insertSubcategory(this.subcategory).subscribe(data => {
      this.shouldShow = false;
      location.reload();
    });
  }

  updateItem() {
    debugger;
    this.subcategoryService.updateSubcategory(this.subcategory).subscribe(data => {
      this.shouldShow = false;
      location.reload();
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

  ngOnDestroy() {
    this.subcategorySubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

}
