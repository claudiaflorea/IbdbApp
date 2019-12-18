import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserAccount } from '../../../models/userAccount';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: UserAccount[];
  userSubscription: Subscription;
  usersArray: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.usersArray = this.users;
    for (let i = 0; i < this.usersArray.length - 1; i++) {
      console.log('user::::::::: ', this.usersArray[i]);
    }
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
