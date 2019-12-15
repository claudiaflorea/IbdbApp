package ibdb.entities.reviews;

import java.util.List;
import java.util.Optional;

public interface IReviewService {

	public Optional<Review> findReviewById(int reviewId);

	public List<Review> findAllReviews();

	public void insertReview(Review review);

	public void updateReview(Review review);

	public void deleteReviewById(int reviewId);
	
}
