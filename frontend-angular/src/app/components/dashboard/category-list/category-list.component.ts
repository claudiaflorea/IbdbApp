import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  category: Category;
  categorySubscription: Subscription;
  categories: Category[];
  shouldShow = false;

  @ViewChild("categoriesModal", {static: false}) 
  private categoriesModal: TemplateRef<any>;

  constructor(private categoryService: CategoryService, private modalService: NgbModal) { }

  ngOnInit() {
    this.categorySubscription = this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log('CATEGORIES: ', this.categories);
    });
  }

  onAdd() {
    this.category = new Category();
    this.shouldShow = true;
    this.modalService.open(this.categoriesModal);
  }

  onUpdate(category: Category) {
    this.category = category;
    this.category.categoryName = category.categoryName;
    this.shouldShow = true;
    this.modalService.open(this.categoriesModal);
  }

  onDelete(category: Category) {
    this.categoryService.deleteCategory(category).subscribe(data => { 
      console.log(data, 'was deleted');
      location.reload(); 
    });
  }

  onSubmit() {
    if (this.category.id != undefined) {
      this.updateItem();
    } else {
      this.insertItem();
    }
  }

  insertItem() {
    this.categoryService.insertCategory(this.category).subscribe(data => {
      this.shouldShow = false;
      /* Reload page to display newly added book */
      location.reload();
    });
  }

  updateItem() {
    this.categoryService.updateCategory(this.category).subscribe(data => {
      this.shouldShow = false;
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }
/*
  addCategory() {
    console.log('Add new category');
    const modalRef = this.modalService.open(AddCategoryModalComponent);
    modalRef.componentInstance.id = 12;
    modalRef.result.then((result) => {
      console.log('------------------', result);
      this.categories.push(result);
      this.categoryService.insertCategory(result).subscribe();
      this.categoryService.getCategories().subscribe( data => {
        console.log('DATA!!! ', data);
        this.categories = data;
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  editCategory() {
    console.log('Edit this category');
    const modalRef = this.modalService.open(EditCategoryModalComponent);
    modalRef.componentInstance.id = 13;
  }

  deleteCategory() {
    console.log('Delete this category');
    const modalRef = this.modalService.open(DeleteCategoryModalComponent);
    modalRef.componentInstance.id = 14;
  }
*/
  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

}
