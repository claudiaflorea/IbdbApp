import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-author-modal',
  templateUrl: './delete-author-modal.component.html',
  styleUrls: ['./delete-author-modal.component.css']
})
export class DeleteAuthorModalComponent implements OnInit {

  @Input() id: number;

  constructor(
    public activeModal: NgbActiveModal,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
