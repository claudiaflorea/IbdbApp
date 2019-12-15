package ibdb.entities.publishers;

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
@RequestMapping("/publisher")
@CrossOrigin(origins = "http://localhost:4200")
public class PublisherController {

	@Autowired
	private IPublisherService publisherService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{publisherId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Publisher> findPublisherById(@PathVariable("publisherId") int publisherId) {
		dataDisplay.printCrudInfo(publisherId); 
		return publisherService.findPublisherById(publisherId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Publisher> getPublisher() {
		dataDisplay.printCrudInfo(); 
		return publisherService.findAllPublishers();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertPublisher(@RequestBody Publisher publisher) {
		dataDisplay.printCrudInfo(); 
		publisherService.insertPublisher(publisher);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updatePublisher(@RequestBody Publisher publisher) {
		dataDisplay.printCrudInfo(); 
		publisherService.updatePublisher(publisher);
	}

	@RequestMapping(value = "/delete/{publisherId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deletePublisher(@PathVariable("publisherId") int publisherId) {
		dataDisplay.printCrudInfo(publisherId); 
		publisherService.deletePublisherById(publisherId);
	}
	
}
