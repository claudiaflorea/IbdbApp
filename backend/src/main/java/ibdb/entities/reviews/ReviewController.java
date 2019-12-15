package ibdb.entities.reviews;

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
@RequestMapping("/review")
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewController {

	@Autowired
	private IReviewService reviewService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{reviewId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Review> findReviewById(@PathVariable("reviewId") int reviewId) {
		dataDisplay.printCrudInfo(reviewId); 
		return reviewService.findReviewById(reviewId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Review> getReview() {
		dataDisplay.printCrudInfo(); 
		return reviewService.findAllReviews();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertReview(@RequestBody Review review) {
		dataDisplay.printCrudInfo(); 
		reviewService.insertReview(review);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateReview(@RequestBody Review review) {
		dataDisplay.printCrudInfo(); 
		reviewService.updateReview(review);
	}

	@RequestMapping(value = "/delete/{reviewId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteReview(@PathVariable("reviewId") int reviewId) {
		dataDisplay.printCrudInfo(reviewId); 
		reviewService.deleteReviewById(reviewId);
	}
	
}
