import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-book-modal',
  templateUrl: './delete-book-modal.component.html',
  styleUrls: ['./delete-book-modal.component.css']
})
export class DeleteBookModalComponent implements OnInit {

  @Input() id: number;

  constructor(
    public activeModal: NgbActiveModal,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
