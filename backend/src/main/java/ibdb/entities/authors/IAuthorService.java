package ibdb.entities.authors;

import java.util.List;
import java.util.Optional;

public interface IAuthorService {

	public Optional<Author> findAuthorById(int authorId);

	public List<Author> findAllAuthors();

	public void insertAuthor(Author author);

	public void updateAuthor(Author author);

	public void deleteAuthorById(int authorId);
	
}
