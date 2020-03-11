import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';
import { GlobalService } from 'src/app/services/globalService.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy {
 
  booksSubscription: Subscription;
  subscriptions: Subscription[] = [];
  books: Book[] = [];
  book: Book;
  category: Category;
  categ: any;
  reviewsArray: any;
  currentStars = 0;
  bookStarsAverage = 0;
  shouldShow = false;
  currentLocation: any;
  lastParameter: any;

  @ViewChild("notifyModal", {static: false}) 
  private notifyModal: TemplateRef<any>;

  constructor(
    public bookService: BookService,
    public categoryService: CategoryService,
    public subcategoryService: SubcategoryService,
    private router: Router,
    public route: ActivatedRoute,
    public globalService: GlobalService,
    private modalService: NgbModal,
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
  }
  
  ngOnInit() {
    this.currentLocation = this.router.url;
    this.lastParameter = Number(this.currentLocation.substr(this.currentLocation.lastIndexOf('/') + 1));
    console.log('------------> last parameter', this.lastParameter, this.lastParameter.type);
    /*
    if((this.lastParameter !== null) || (this.lastParameter !== undefined) || (this.lastParameter !== NaN)) {
      this.filterBooks(this.lastParameter);
    } else if((this.lastParameter === null) || (this.lastParameter === undefined) || (this.lastParameter === NaN)) {
        this.booksSubscription = this.bookService.getBooks().subscribe(
          data => {
            this.books = data;
          }
        )
      }  */
    this.filterBooks(this.lastParameter);
    this.router.navigateByUrl(this.router.url);
  }

  filterBooks(id: Number) {
    if(id) {
      this.booksSubscription = this.bookService.getBooks()
      .subscribe(
        data => {
          for(let b of data) {
            if(b.subcategory.category.id === id) {
              this.books.push(b);
            } else if(b.subcategory.id === id) {
              this.books.push(b);
            }
          }
          if (id && this.books.length === 0) {
            this.shouldShow = true;
            this.modalService.open(this.notifyModal);
          }
        }
      );
    }  else {
      this.booksSubscription = this.bookService.getBooks().subscribe(
        data => {
          this.books = data;
        }
      );
    }
  }

  goToBook(book: Book) {
    this.router.navigate(['/book', book.bookId]);
  }

  goToBooks() {
    this.modalService.dismissAll();
    this.router.navigateByUrl('/books');
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    this.booksSubscription.unsubscribe();
  }
}
