import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserAccount } from 'src/app/models/userAccount';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isSignUpFailed = false;
  errorMessage: string = null;
  successMessage = null;
  userAccount: UserAccount;
  roles: any;
  users: any;
  
  constructor(private userService: UserService, private roleService: RoleService) {}

  ngOnInit() {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
      console.log('ROLEEEEEEEEEEEEES::: ', this.roles);
    })
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log('USEEEEEEEEEEERSSSS::: ', this.users);
    })
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
        return;
    } else {
      console.log('-------------> Form value: ', form.value);
      this.userService.insertUser(form.value).subscribe(data => {
        this.successMessage = 'Your account has been successfully created!';
      });
    }
    form.reset();
  }

}
