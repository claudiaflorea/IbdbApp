import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getOperatorBoard().subscribe(
          data => {
              this.board = data;
          },
          error => {
              this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
          }
      );
  }
}
