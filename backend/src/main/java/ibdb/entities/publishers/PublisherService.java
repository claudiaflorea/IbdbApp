package ibdb.entities.publishers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PublisherService implements IPublisherService {

	@Autowired
	private IPublisherRepository publisherRepository;

	public Optional<Publisher> findPublisherById(int publisherId) {
		return publisherRepository.findById(publisherId);
	}

	public List<Publisher> findAllPublishers() {
		return (List<Publisher>) publisherRepository.findAll();
	}

	public void insertPublisher(Publisher publisher) {
		publisherRepository.save(publisher);
	}

	public void updatePublisher(Publisher publisher) {
		publisherRepository.save(publisher);
	}

	public void deletePublisherById(int publisherId) {
		publisherRepository.deleteById(publisherId);
	}

}

