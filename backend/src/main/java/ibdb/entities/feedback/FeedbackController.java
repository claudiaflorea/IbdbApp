package ibdb.entities.feedback;

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
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:4200")
public class FeedbackController {

	@Autowired
	private IFeedbackService feedbackService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{feedbackId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Feedback> findFeedbackById(@PathVariable("feedbackId") int feedbackId) {
		dataDisplay.printCrudInfo(feedbackId); 
		return feedbackService.findFeedbackById(feedbackId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Feedback> getFeedback() {
		dataDisplay.printCrudInfo(); 
		return feedbackService.findAllFeedback();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertFeedback(@RequestBody Feedback feedback) {
		dataDisplay.printCrudInfo(); 
		feedbackService.insertFeedback(feedback);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateFeedback(@RequestBody Feedback feedback) {
		dataDisplay.printCrudInfo(); 
		feedbackService.updateFeedback(feedback);
	}

	@RequestMapping(value = "/delete/{feedbackId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteFeedback(@PathVariable("feedbackId") int feedbackId) {
		dataDisplay.printCrudInfo(feedbackId); 
		feedbackService.deleteFeedbackById(feedbackId);
	}
	
}
