import { Component, OnInit, AbstractType, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoginFailed = false;
  errorMessage: string = null;
  users: any;
  successMessage = null;
  allRoles: any;
  cookieValue: any;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private authService: AuthService,
    private roleService: RoleService,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
    this.roleService.getRoles().subscribe(data => {
      this.allRoles = data;
     });
     this.authService.loggedInUser = JSON.parse(localStorage.getItem('initData'));
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
            window.localStorage.setItem('initData', JSON.stringify(user));
            this.cookieService.set('currentUser', user);
            this.cookieService.set('currentUser', JSON.stringify(user));
            this.cookieValue = JSON.parse(this.cookieService.get('currentUser'));
            console.log('(((((((((((((((((((  ', this.cookieValue, '  ))))))))))))))))))))');
            this.authService.loggedInUser = this.cookieValue;
            
            console.log('LOGGED IN USER :::::::::::: ', this.authService.loggedInUser);
            if(user.role.roleName === 'Admin') {
              this.authService.isAdmin = true;
            }
        }
      }
    }
    form.reset();
  }

  ngOnDestroy() {
    this.authService.loggedInUser = JSON.parse(localStorage.getItem('initData'));
  }

}
