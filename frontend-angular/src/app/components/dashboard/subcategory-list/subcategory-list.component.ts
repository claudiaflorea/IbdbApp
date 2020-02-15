import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Subcategory } from 'src/app/models/subcategory';
import { Subscription } from 'rxjs';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSubcategoryModalComponent } from '../../modals/add-subcategory-modal/add-subcategory-modal.component';
import { EditSubcategoryModalComponent } from '../../modals/edit-subcategory-modal/edit-subcategory-modal.component';
import { DeleteSubcategoryModalComponent } from '../../modals/delete-subcategory-modal/delete-subcategory-modal.component';
import { CategoryService } from 'src/app/services/category.service';
import { map } from 'rxjs/operators';
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

  
  onAdd() {
    this.subcategory = new Subcategory();
    this.selectedCategory = null;
    this.shouldShow = true;
    this.modalService.open(this.subcategoriesModal);
  }

  onUpdate(subcategory: Subcategory) {
    this.subcategory = subcategory;
    this.subcategory.category = subcategory.category;
    this.shouldShow = true;
    this.modalService.open(this.subcategoriesModal);
  }

  onDelete(subcategory: Subcategory) {
    this.subcategoryService.deleteSubcategory(subcategory).subscribe(data => { 
      console.log(data, 'was deleted');
      location.reload(); 
    });
  }

  onSubmit() {
    if (this.subcategory.id != undefined) {
      this.updateItem();
    } else {
      this.insertItem();
    }
  }

  insertItem() {
    this.subcategoryService.insertSubcategory(this.subcategory).subscribe(data => {
      this.shouldShow = false;
      /* Reload page to display newly added book */
      location.reload();
    });
  }

  updateItem() {
    this.subcategoryService.updateSubcategory(this.subcategory).subscribe(data => {
      this.shouldShow = false;
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

/*  addSubcategory() {
    console.log('Add new subcategory');
    const modalRef = this.modalService.open(AddSubcategoryModalComponent);
    modalRef.componentInstance.id = 17;
    modalRef.result.then((result) => {
    this.categoryService.getCategories().subscribe( data => {
      data.filter((categ) => {
        if (categ.categoryName === result.category) {
        result.category = categ;
        console.log('***********', result.category);
        }
      });
    });
    console.log('RESUUUUUUUUUUUUUUUUUUUUUUUUULT', result);
    this.subcategoryService.insertSubcategory(result).subscribe();
    this.subcategoryService.getSubcategories().subscribe( data => {
      this.subcategories = data;
    });
    }).catch((error) => {
      console.log(error);
    });
  }

  editSubcategory() {
    console.log('Edit this subcategory');
    const modalRef = this.modalService.open(EditSubcategoryModalComponent);
    modalRef.componentInstance.id = 18;
  }

  deleteSubcategory() {
    console.log('Delete this subcategory');
    const modalRef = this.modalService.open(DeleteSubcategoryModalComponent);
    modalRef.componentInstance.id = 19;
  }
*/
  ngOnDestroy() {
    this.subcategorySubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

}
