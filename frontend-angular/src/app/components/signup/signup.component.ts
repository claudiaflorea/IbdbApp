import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../auth/signup-info';
import { AuthService } from '../auth/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupInfo: SignUpInfo;
  isSignUpFailed = false;
  errorMessage: string = null;
  
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
        return;
    }

    this.signupInfo = new SignUpInfo(
        form.value.name,
        form.value.surname,
        form.value.username,
        form.value.email,
        form.value.password);

    this.authService.signUp(this.signupInfo).subscribe(
        data => { },
        error => {
            this.errorMessage = error;
            this.isSignUpFailed = true;
        }
    );

    form.reset();
}
}
