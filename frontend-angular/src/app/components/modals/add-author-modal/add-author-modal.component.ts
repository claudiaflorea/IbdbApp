import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrls: ['./add-author-modal.component.css']
})
export class AddAuthorModalComponent implements OnInit {

  @Input() id: number;
  addAuthorForm: FormGroup;
  authors: Author[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public authorSAervice: AuthorService
  ) {
    this.createForm();
  }

  private createForm() {
    this.addAuthorForm = this.formBuilder.group({
      authorId: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      address: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.addAuthorForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  ngOnInit() {
  }

}
