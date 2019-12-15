package ibdb.entities.authors;

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
@RequestMapping("/author")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthorController {

	@Autowired
	private IAuthorService authorService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{authorId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Author> findAuthorById(@PathVariable("authorId") int authorId) {
		dataDisplay.printCrudInfo(authorId); 
		return authorService.findAuthorById(authorId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Author> getAuthors() {
		dataDisplay.printCrudInfo(); 
		return authorService.findAllAuthors();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertAuthor(@RequestBody Author author) {
		dataDisplay.printCrudInfo(); 
		authorService.insertAuthor(author);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateAuthor(@RequestBody Author author) {
		dataDisplay.printCrudInfo(); 
		authorService.updateAuthor(author);
	}

	@RequestMapping(value = "/delete/{authorId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteAuhtor(@PathVariable("authorId") int authorId) {
		dataDisplay.printCrudInfo(authorId); 
		authorService.deleteAuthorById(authorId);
	}
	
}
