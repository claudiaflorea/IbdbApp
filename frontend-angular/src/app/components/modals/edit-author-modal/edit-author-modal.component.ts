import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-edit-author-modal',
  templateUrl: './edit-author-modal.component.html',
  styleUrls: ['./edit-author-modal.component.css']
})
export class EditAuthorModalComponent implements OnInit {

  @Input() id: number;
  editAuthorForm: FormGroup;
  authors: Author[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public authorSAervice: AuthorService
  ) {
    this.createForm();
  }

  private createForm() {
    this.editAuthorForm = this.formBuilder.group({
      authorId: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      address: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.editAuthorForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

}
