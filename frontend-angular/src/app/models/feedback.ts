import { Book } from './book';
import { UserAccount } from './userAccount';

export class Feedback {
  id: string;
  message: string;
  book: Book;
  sender: UserAccount;
}
