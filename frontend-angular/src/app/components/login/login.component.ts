import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginInfo } from '../auth/login-info';
import { AuthService } from '../auth/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginInfo: AuthLoginInfo;
  isLoginFailed = false;
  errorMessage: string = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
        return;
    }

    this.loginInfo = new AuthLoginInfo(form.value.username, form.value.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
        data => { },
        error => {
            this.errorMessage = error;
            this.isLoginFailed = true;
        }
    );

    form.reset();
}

}
