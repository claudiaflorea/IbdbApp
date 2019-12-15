package ibdb.entities.authors;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService implements IAuthorService {

	@Autowired
	private IAuthorRepository authorRepository;

	public Optional<Author> findAuthorById(int authorId) {
		return authorRepository.findById(authorId);
	}

	public List<Author> findAllAuthors() {
		return (List<Author>) authorRepository.findAll();
	}

	public void insertAuthor(Author author) {
		authorRepository.save(author);
	}

	public void updateAuthor(Author author) {
		authorRepository.save(author);
	}

	public void deleteAuthorById(int authorId) {
		authorRepository.deleteById(authorId);
	}

}
