import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/services/auth.service';

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
      location.reload(); 
    });
  }

  onSubmit() {
    this.category.id != undefined ? this.updateItem() : this.insertItem();
  }

  insertItem() {
    this.categoryService.insertCategory(this.category).subscribe(data => {
      this.shouldShow = false;
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

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

}
