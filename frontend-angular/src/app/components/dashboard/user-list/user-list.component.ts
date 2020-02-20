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

  constructor(
    private userService: UserService, 
    private modalService: NgbModal,
    private datePipe: DatePipe
    ) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log('USERS: ', this.users);
      this.usersArray = this.users;
      for (let i = 0; i < this.usersArray.length - 1; i++) {
       // console.log('user::::::::: ', this.usersArray[i]);
      }
    });

    
    this.genders = ['Male', 'Female'];
  }

  onAdd() {
    this.user = new UserAccount();
    this.shouldShow = true;
    this.modalService.open(this.usersModal);
  }

  onUpdate(user: UserAccount) {
    this.user = user;
    this.user.birthDate = new Date(this.datePipe.transform(this.user.birthDate, 'yyyy/MM/dd'));
    this.user.gender = user.gender;
    this.shouldShow = true;
    this.modalService.open(this.usersModal);
  }

  onDelete(user: UserAccount) {
    this.userService.deleteUser(user).subscribe(data => { 
      console.log(data, 'was deleted');
      location.reload(); 
    });
  }

  onSubmit() {
    if (this.user.id != undefined) {
      this.updateItem();
    } else {
      this.insertItem();
    }
  }

  insertItem() {
    this.userService.insertUser(this.user).subscribe(data => {
      this.shouldShow = false;
      /* Reload page to display newly added book */
      location.reload();
    });
  }

  updateItem() {
    this.userService.updateUser(this.user).subscribe(data => {
      this.shouldShow = false;
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

/*
  addUser() {
    console.log('Add new user');
    const modalRef = this.modalService.open(AddUserModalComponent);
    modalRef.componentInstance.id = 10;
    modalRef.result.then((result) => {
      console.log(result);
      this.users.push(result);
      result.role = null;
      this.userService.insertUser(result).subscribe();
      this.userService.getUsers().subscribe( data => {
        console.log('DATA!!! ', data);
        this.users = data;
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  editUser() {
    console.log('Edit this user');
    const modalRef = this.modalService.open(EditUserModalComponent);
    modalRef.componentInstance.id = 11;
  }

  deleteUser() {
    console.log('Delete this user');
    const modalRef = this.modalService.open(DeleteUserModalComponent);
    modalRef.componentInstance.id = 12;
  }
*/
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
