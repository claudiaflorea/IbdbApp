import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subcategory } from 'src/app/models/subcategory';
import { Subscription } from 'rxjs';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSubcategoryModalComponent } from '../../modals/add-subcategory-modal/add-subcategory-modal.component';
import { EditSubcategoryModalComponent } from '../../modals/edit-subcategory-modal/edit-subcategory-modal.component';
import { DeleteSubcategoryModalComponent } from '../../modals/delete-subcategory-modal/delete-subcategory-modal.component';
import { CategoryService } from 'src/app/services/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit, OnDestroy {

  subcategory: Subcategory;
  subcategorySubscription: Subscription;
  subcategories: Subcategory[];

  constructor(
    private subcategoryService: SubcategoryService,
    private modalService: NgbModal,
    public categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.subcategorySubscription = this.subcategoryService.getSubcategories().subscribe(data => {
      this.subcategories = data;
      //console.log('SUBCATEGORIES: ', this.subcategories);
    });
  }

  addSubcategory() {
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

  ngOnDestroy() {
    this.subcategorySubscription.unsubscribe();
  }

}
