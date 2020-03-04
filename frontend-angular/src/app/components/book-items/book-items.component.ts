import { Component, OnInit, ViewChild, TemplateRef, OnDestroy, OnChanges } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { PublisherService } from 'src/app/services/publisher.service';
import { Review } from 'src/app/models/review';
import { StarRatingComponent } from 'ng-starrating';
import { NgbModal, NgbModalModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ReviewService } from 'src/app/services/review.service';
import { AuthService } from 'src/app/services/auth.service';
import { Author } from 'src/app/models/author';
import { UserAccount } from 'src/app/models/userAccount';

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {

  book: Book;
  author: Author;
  booksSubscription: Subscription;
  publisherSubscription: Subscription;
  publisher: Publisher;
  reviews: Review[];
  review: Review;
  revs: any;
  reviewsArray: any;
  currentStars: any;
  shouldShow = false;
  nrOfReviews:any;
  currentRate: 5;
  allReviews: any;
  books: any;
  lastSegment: any;
  currentUser: UserAccount;

  @ViewChild("reviewModal", {static: false}) 
  private reviewModal: TemplateRef<any>;

  constructor(
    public bookService: BookService,
    public route: ActivatedRoute,
    public pubService: PublisherService,
    private modalService: NgbModal,
    private reviewService: ReviewService,
    private config: NgbRatingConfig,
    private authService: AuthService,
    private router: Router
    ) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
            this.router.navigated = false;
         }
      })
    }

  ngOnInit() {
    this.lastSegment = this.router.url.substr(this.router.url.lastIndexOf('/')+1);
    console.log('LAST SEGMENT: ', this.lastSegment);
    
    this.route.params.subscribe(
      (params: Params) => {
        params = this.route.snapshot.params;
        this.bookService.getBookById(+params['id']).subscribe( data => {
          this.book = data;
          this.author = data.author;
          console.log('------------------> ', data
          );
          if (this.book.image === null) {
            this.book.image = '/assets/images/books-images/bookPlaceholder.jpeg';
          }
          this.reviewsArray = this.book.reviews;
          this.nrOfReviews = this.reviewsArray.length;
          if (this.reviewsArray.length > 0) {
            for (let i = 0; i <= this.reviewsArray.length - 1; i++) {
              this.currentStars = this.reviewsArray[i].rating;
           }
          }
        });
      }
    );

    this.config.max = 5;

    this.allReviews = this.reviewService.getReviews().subscribe( data => {
      console.log('+++++++++++++++++>>>>>>', data);
    });

    this.currentUser = this.authService.loggedInUser;
    console.log('<<<<<<<<<<<<<<< CURRENT USER >>>>>>>>>>>>>>>>', this.currentUser);

  }

  onAdd() {
    this.review = new Review();
    this.review.book = this.book;
    this.review.user = this.currentUser;
    this.review.publishedAt = new Date();
    this.shouldShow = true;
    this.modalService.open(this.reviewModal);

    console.log('Inserting review >>>>>>>>> ', this.review);
  }

  onSubmit() {
    this.insertReview();
  }

  insertReview() {
   this.reviewService.insertReview(this.review).subscribe(data => {
      this.shouldShow = false;
      this.onCloseModal();
      location.reload();
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }


}
