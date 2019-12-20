import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  styleUrls: ['./delete-category-modal.component.css']
})
export class DeleteCategoryModalComponent implements OnInit {

  @Input() id: number;

  constructor(
    public activeModal: NgbActiveModal,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

}
