package ibdb.entities.books;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService implements IBookService {

	@Autowired
	private IBookRepository bookRepository;

	public Optional<Book> findBookById(int bookId) {
		return bookRepository.findById(bookId);
	}

	public List<Book> findAllBooks() {
		return (List<Book>) bookRepository.findAll();
	}
	
	public Optional<Book> findBooksByCategoryId(int categoryId) {
		return bookRepository.findById(categoryId);
	}

	public Optional<Book> findBooksBySubcategoryId(int subcategoryId) {
		return bookRepository.findById(subcategoryId);
	}

	public void insertBook(Book book) {
		bookRepository.save(book);
	}

	public void updateBook(Book book) {
		bookRepository.save(book);
	}

	public void deleteBookById(int bookId) {
		bookRepository.deleteById(bookId);
	}
}

