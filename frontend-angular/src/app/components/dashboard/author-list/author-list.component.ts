import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Subscription } from 'rxjs';
import { AuthorService } from 'src/app/services/author.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from 'src/app/models/address';

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
  shouldShow: boolean;
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  authorsLength: any;
  country: any;
  city: any;

  constructor(private authorService: AuthorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.authorSubscription = this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
      this.authorsLength = data.length;
      for(let a of this.authors) {
        this.country = a.address.country;
        this.city = a.address.city;
      }
    });
  }

  onAdd() {
    this.author = new Author();
    this.author.address = new Address();
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
  
  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  ngOnDestroy() {
    this.authorSubscription.unsubscribe();
  }
}
