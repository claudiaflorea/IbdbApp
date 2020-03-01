import { Review } from './review';
import { Category } from './category';
import { Subcategory } from './subcategory';
import { Author } from './author';

export class Book {
  bookId: string;
  isbn: string;
  title: string;
  publishDate: Date;
  author: Author;
  publisher: string;
  category: Category;
  categoryId: number;
  subcategory: Subcategory;
  image: string;
  reviews: Review[];
  rating: number;
}
