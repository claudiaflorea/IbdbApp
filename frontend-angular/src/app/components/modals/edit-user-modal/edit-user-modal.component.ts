import { Component, OnInit, Input } from '@angular/core';
import { UserAccount } from 'src/app/models/userAccount';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

  @Input() id: number;
  editUserForm: FormGroup;
  users: UserAccount[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.createForm();
   }

   private createForm() {
    this.editUserForm = this.formBuilder.group({
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
    this.activeModal.close(this.editUserForm.value);
  }

  ngOnInit() {
  }

}
