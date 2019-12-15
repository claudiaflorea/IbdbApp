package ibdb.entities.reviews;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService implements IReviewService {

	@Autowired
	private IReviewRepository reviewRepository;

	public Optional<Review> findReviewById(int reviewId) {
		return reviewRepository.findById(reviewId);
	}

	public List<Review> findAllReviews() {
		return (List<Review>) reviewRepository.findAll();
	}

	public void insertReview(Review review) {
		reviewRepository.save(review);
	}

	public void updateReview(Review review) {
		reviewRepository.save(review);
	}

	public void deleteReviewById(int reviewId) {
		reviewRepository.deleteById(reviewId);
	}

}

