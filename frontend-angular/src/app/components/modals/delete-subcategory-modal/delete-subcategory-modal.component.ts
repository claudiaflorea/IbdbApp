import { Component, OnInit, Input } from '@angular/core';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-subcategory-modal',
  templateUrl: './delete-subcategory-modal.component.html',
  styleUrls: ['./delete-subcategory-modal.component.css']
})
export class DeleteSubcategoryModalComponent implements OnInit {

  @Input() id: number;

  constructor(
    public activeModal: NgbActiveModal,
    public subcategoryService: SubcategoryService
  ) { }

  ngOnInit() {
  }

}
