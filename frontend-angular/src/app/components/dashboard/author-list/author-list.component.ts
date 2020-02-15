import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
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
  @ViewChild("authorsModal", {static: false}) 
  private authorsModal: TemplateRef<any>;
  selectedCountry: any;
  shouldShow: boolean;
  cities: any[];
  currentPage = 1;
  itemsPerPage = 5;
  pageSize: number;

  countries = [
		{ name: 'Germany',  cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn' ] },
		{ name: 'Spain', cities: ['Barcelona' ] },
		{ name: 'USA', cities: ['Downers Grove'] },
		{ name: 'Mexico', cities: ['Puebla' ] },
		{ name: 'India', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore'] },
  ];

  constructor(private authorService: AuthorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.authorSubscription = this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
      console.log('AUTHORS: ', this.authors);
    });
  }

  onAdd() {
    this.author = new Author();
    this.shouldShow = true;
    this.modalService.open(this.authorsModal);
  }

  onUpdate(author: Author) {
    this.author = author;
    this.author.address.country = author.address.country;
    this.author.address.city = author.address.city;
    this.shouldShow = true;
    this.modalService.open(this.authorsModal);
  }

  onDelete(author: Author) {
    this.authorService.deleteAuthor(author).subscribe(data => { 
      console.log(data, 'was deleted');
      location.reload(); 
    });
  }

  onSubmit() {
    if (this.author.id != undefined) {
      this.updateItem();
    } else {
      this.insertItem();
    }
  }

  insertItem() {
    this.authorService.insertAuthor(this.author).subscribe(data => {
      this.shouldShow = false;
      /* Reload page to display newly added book */
      location.reload();
    });
  }

  updateItem() {
    this.authorService.updateAuthor(this.author).subscribe(data => {
      this.shouldShow = false;
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

  changeCountry(country) {
		this.cities = this.countries.find(cntry => cntry.name === country).cities;
  }
  
  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }
/*
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
*/
  ngOnDestroy() {
    this.authorSubscription.unsubscribe();
  }


}
