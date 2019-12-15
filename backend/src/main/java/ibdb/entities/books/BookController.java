package ibdb.entities.books;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ibdb.utils.DisplayData;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

	@Autowired
	private IBookService bookService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{bookId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Book> findBookById(@PathVariable("bookId") int bookId) {
		dataDisplay.printCrudInfo(bookId); 
		return bookService.findBookById(bookId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Book> getBooks() {
		dataDisplay.printCrudInfo(); 
		return bookService.findAllBooks();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertBook(@RequestBody Book book) {
		dataDisplay.printCrudInfo(); 
		bookService.insertBook(book);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateBook(@RequestBody Book book) {
		dataDisplay.printCrudInfo(); 
		bookService.updateBook(book);
	}

	@RequestMapping(value = "/delete/{bookId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteBook(@PathVariable("bookId") int bookId) {
		dataDisplay.printCrudInfo(bookId); 
		bookService.deleteBookById(bookId);
	}
	
}
