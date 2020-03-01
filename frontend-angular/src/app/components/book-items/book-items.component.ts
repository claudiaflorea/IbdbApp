import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { PublisherService } from 'src/app/services/publisher.service';
import { Review } from 'src/app/models/review';
import { StarRatingComponent } from 'ng-starrating';
import { NgbModal, NgbModalModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ReviewService } from 'src/app/services/review.service';
import { AuthService } from 'src/app/services/auth.service';
import { Author } from 'src/app/models/author';

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

  @ViewChild("reviewModal", {static: false}) 
  private reviewModal: TemplateRef<any>;

  constructor(
    public bookService: BookService,
    public route: ActivatedRoute,
    public pubService: PublisherService,
    private modalService: NgbModal,
    private reviewService: ReviewService,
    private config: NgbRatingConfig,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.allReviews = this.reviewService.getReviews().subscribe( data => {
      console.log('+++++++++++++++++>>>>>>', data);
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.bookService.getBookById(+params['id']).subscribe( data => {
          this.book = data;
          this.author = data.author;
          console.log('------------------> ', data);
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
  }

  onAdd() {
    this.review = new Review();
    this.review.book = this.book;
    this.review.userAccount = this.authService.loggedInUser;
    this.review.publishedAt = new Date();
    this.shouldShow = true;
    this.modalService.open(this.reviewModal);
  }

  onSubmit() {
    this.insertReview();
  }

  insertReview() {
   this.reviewService.insertReview(this.review).subscribe(data => {
      console.log("INSERTING THIS REVIEW:   ", data);
      this.shouldShow = false;
      location.reload();
    });
  }

  onCloseModal(){
    this.modalService.dismissAll();
  }
}
