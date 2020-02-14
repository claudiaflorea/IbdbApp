package ibdb.entities.books;

import java.util.List;
import java.util.Optional;

public interface IBookService {

	public Optional<Book> findBookById(int bookId);

	public Book findBooksByCategoryId(int categoryId);
	
	public Book findBooksBySubcategoryId(int subcategoryId);
	
	public List<Book> findAllBooks();

	public void insertBook(Book book);

	public void updateBook(Book book);

	public void deleteBookById(int bookId);
	
}
