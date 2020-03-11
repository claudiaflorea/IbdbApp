import { Component, OnInit, AbstractType } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginFailed = false;
  errorMessage: string = null;
  users: any;
  successMessage = null;
  allRoles: any;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private authService: AuthService,
    private roleService: RoleService
    ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
    this.roleService.getRoles().subscribe(data => {
      this.allRoles = data;
     });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
        return;
    } else {
      for(let user of this.users) {
        if (
          (form.value.username === user.username || form.value.username === user.emailAddress ) 
          && form.value.password === user.password) {
            this.successMessage = 'You logged in successfully!';
            this.authService.loggedIn = true;
            this.authService.loggedInUser = user;
            console.log('LOGGED IN USER :::::::::::: ', this.authService.loggedInUser);
            if(user.role.roleName === 'Admin') {
              this.authService.isAdmin = true;
            }
        }
      }
    }
    form.reset();
  }

}
