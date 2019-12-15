import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../models/review';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private BASE_URL = 'http://localhost:8090/review/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getReviews() {
    return this.http.get(this.BASE_URL + 'all').pipe(map((res: Review[]) => res ));
  }

  getListedReviewsByCategoryId(categoryId: string) {
    return this.http.get(this.BASE_URL + 'all/listed/' + categoryId)
      .pipe(map((res: Review[]) => res ));
  }

  getReviewById(reviewId: string) {
    return this.http.get(this.BASE_URL + reviewId)
      .pipe(map((res: Review) => res ));
  }

  insertReview(review: Review) {
    return this.http.post<Review>(this.BASE_URL + 'add', JSON.stringify(review), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  updateReview(review: Review) {
    return this.http.put<Review>(this.BASE_URL + 'update', JSON.stringify(review), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  deleteReview(review: Review) {
    return this.http.delete(this.BASE_URL + 'delete/' + review.id, this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }
}
