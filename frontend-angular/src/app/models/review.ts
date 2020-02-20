import { UserAccount } from './userAccount';
import { Book } from './book';

export class Review {
  id: string;
  content: string;
  publishedAt: Date;
  rating: number;
  reviewAuthor: UserAccount;
  book: Book
}
