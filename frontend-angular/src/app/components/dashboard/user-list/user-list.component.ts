import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { UserAccount } from '../../../models/userAccount';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: UserAccount[];
  userSubscription: Subscription;
  usersArray: any;
  user: UserAccount;
  shouldShow: boolean;
  @ViewChild("usersModal", {static: false}) 
  private usersModal: TemplateRef<any>;
  genders: any;
  selectedGender: any;

  constructor(
    private userService: UserService, 
    private modalService: NgbModal,
    private datePipe: DatePipe
    ) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.usersArray = this.users;
    });

    
    this.genders = ['Male', 'Female'];
  }

  compareGender(a, b) {
    return !a || !b ? false : a.gender === b.gender;
  }

  onAdd() {
    this.user = new UserAccount();
    this.shouldShow = true;
    this.selectedGender = null;
    this.modalService.open(this.usersModal);
  }

  onUpdate(user: UserAccount) {
    this.user = user;
    this.user.birthDate = new Date(this.datePipe.transform(this.user.birthDate, 'yyyy/MM/dd'));
    this.selectedGender = user.gender;
    this.shouldShow = true;
    this.modalService.open(this.usersModal);
  }

  onDelete(user: UserAccount) {
    this.userService.deleteUser(user).subscribe(data => { 
    location.reload(); 
    });
  }

  onSubmit() {
    this.user.gender = this.selectedGender;
    this.user.id != undefined ? this.updateItem() : this.insertItem();
  }

  insertItem() {
    this.userService.insertUser(this.user).subscribe(data => {
      this.shouldShow = false;
      location.reload();
    });
  }

  updateItem() {
    this.userService.updateUser(this.user).subscribe(data => {
      this.shouldShow = false;
      location.reload();
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
