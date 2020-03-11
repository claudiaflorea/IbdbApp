import { Review } from './review';
import { Category } from './category';
import { Subcategory } from './subcategory';
import { Author } from './author';
import { Publisher } from './publisher';

export class Book {
  bookId: string;
  isbn: string;
  title: string;
  publishDate: Date;
  author: Author;
  publisher: Publisher;
  category: Category;
  categoryId: number;
  subcategory: Subcategory;
  image: string;
  reviews: Review[];
  rating: number;
}
