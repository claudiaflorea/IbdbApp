import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { PublisherService } from 'src/app/services/publisher.service';
import { Review } from 'src/app/models/review';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {

  book: Book;
  booksSubscription: Subscription;
  publisherSubscription: Subscription;
  publisher: Publisher;
  reviews: Review[];
  review: Review;
  revs: any;
  reviewsArray: any;
  currentStars: any;

  constructor(
    public bookService: BookService,
    public route: ActivatedRoute,
    public pubService: PublisherService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookService.getBookById(+params['id']).subscribe( data => {
          this.book = data;
         // console.log('*********', this.book);
         // this.reviews = this.book.reviews;
         // console.log('reviews  +++++++++', this.book.reviews);
          this.reviewsArray = this.book.reviews;
          if (this.reviewsArray.length > 0) {
            for (let i = 0; i <= this.reviewsArray.length - 1; i++) {
              // console.log('------------------', this.reviewsArray[i].reviewContent);
              // console.log('------------------', this.reviewsArray[i].rating);
              // console.log('------------------', this.reviewsArray[i].user.firstName, ' ', this.reviewsArray[i].user.lastName);
              this.currentStars = this.reviewsArray[i].rating;
           }
          }
        });
      }
    );
  }
}
