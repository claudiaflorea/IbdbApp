import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserAccount } from 'src/app/models/userAccount';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})

export class AddUserModalComponent implements OnInit {
  @Input() id: number;
  addUserForm: FormGroup;
  users: UserAccount[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.createForm();
  }

  private createForm() {
    this.addUserForm = this.formBuilder.group({
      userId: '',
      emailAddress: '',
      username: '',
      firstName: '',
      lastName: '',
      gender: '',
      birthDate: '',
      role: '',
      password: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.addUserForm.value);
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
