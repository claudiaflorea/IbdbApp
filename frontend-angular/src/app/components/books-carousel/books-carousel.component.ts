import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books-carousel',
  templateUrl: './books-carousel.component.html',
  styleUrls: ['./books-carousel.component.css']
})

export class BooksCarouselComponent implements OnInit {

  images: any[];
  books: Book[]
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  constructor(
    public bookService: BookService,
    public router: Router
    ) { }

  ngOnInit() {

    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
    console.log('Books: ', this.books);
  }

  goToBookPage(book: Book) {
    console.log(book.bookId);
    this.router.navigate(['/book', book.bookId]);
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
