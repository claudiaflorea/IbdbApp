import { Review } from './review';
import { Category } from './category';
import { Subcategory } from './subcategory';

export class Book {
  bookId: string;
  isbn: string;
  title: string;
  publishDate: Date;
  author: string;
  publisher: string;
  category: Category;
  subcategory: Subcategory;
  image: string;
  reviews: Review[];
  rating: number;
}
