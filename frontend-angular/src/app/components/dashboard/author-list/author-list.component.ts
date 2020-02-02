import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Subscription } from 'rxjs';
import { AuthorService } from 'src/app/services/author.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAuthorModalComponent } from '../../modals/add-author-modal/add-author-modal.component';
import { EditAuthorModalComponent } from '../../modals/edit-author-modal/edit-author-modal.component';
import { DeleteAuthorModalComponent } from '../../modals/delete-author-modal/delete-author-modal.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {

  author: Author;
  authorSubscription: Subscription;
  authors: Author[];

  constructor(private authorService: AuthorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.authorSubscription = this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
      console.log('AUTHORS: ', this.authors);
    });
  }

  addAuthor() {
    console.log('Add new author');
    const modalRef = this.modalService.open(AddAuthorModalComponent);
    modalRef.componentInstance.id = 14;
    modalRef.result.then((result) => {
      console.log(result);
     // result.address = JSON.parse('{"country":result.selectedCountry, "city":result.selectedCity}');
      this.authors.push(result);
      this.authorService.insertAuthor(result).subscribe();
      this.authorService.getAuthors().subscribe( data => {
        console.log('DATA!!! ', data);
        this.authors = data;
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  editAuthor() {
    console.log('Edit this author');
    const modalRef = this.modalService.open(EditAuthorModalComponent);
    modalRef.componentInstance.id = 15;
  }

  deleteAuthor() {
    console.log('Delete this author');
    const modalRef = this.modalService.open(DeleteAuthorModalComponent);
    modalRef.componentInstance.id = 16;
  }

  ngOnDestroy() {
    this.authorSubscription.unsubscribe();
  }


}
