import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { AddCategoryModalComponent } from '../../modals/add-category-modal/add-category-modal.component';
import { EditCategoryModalComponent } from '../../modals/edit-category-modal/edit-category-modal.component';
import { DeleteCategoryModalComponent } from '../../modals/delete-category-modal/delete-category-modal.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  category: Category;
  categorySubscription: Subscription;
  categories: Category[];

  constructor(private categoryService: CategoryService, private modalService: NgbModal) { }

  ngOnInit() {
    this.categorySubscription = this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log('CATEGORIES: ', this.categories);
    });
  }

  addCategoriy() {
    console.log('Add new category');
    const modalRef = this.modalService.open(AddCategoryModalComponent);
    modalRef.componentInstance.id = 12;
    modalRef.result.then((result) => {
      console.log(result);
      this.categories.push(result);
      this.categoryService.insertCategory(result);
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

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

}
