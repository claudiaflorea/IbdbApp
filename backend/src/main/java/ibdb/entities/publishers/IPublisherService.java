package ibdb.entities.publishers;

import java.util.List;
import java.util.Optional;

public interface IPublisherService {

	public Optional<Publisher> findPublisherById(int publisherId);

	public List<Publisher> findAllPublishers();

	public void insertPublisher(Publisher publisher);

	public void updatePublisher(Publisher publisher);

	public void deletePublisherById(int publisherId);
	
}
