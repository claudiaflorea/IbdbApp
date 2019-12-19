import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserAccount } from '../../../models/userAccount';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserModalComponent } from '../../modals/add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from '../../modals/edit-user-modal/edit-user-modal.component';
import { DeleteUserModalComponent } from '../../modals/delete-user-modal/delete-user-modal.component';


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

  constructor(private userService: UserService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.usersArray = this.users;
      for (let i = 0; i < this.usersArray.length - 1; i++) {
       // console.log('user::::::::: ', this.usersArray[i]);
      }
    });
  }

  addUser() {
    console.log('Add new user');
    const modalRef = this.modalService.open(AddUserModalComponent);
    modalRef.componentInstance.id = 10;
    modalRef.result.then((result) => {
      console.log(result);
      this.users.push(result);
      this.userService.insertUser(result);
      this.userService.save(result);
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

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
