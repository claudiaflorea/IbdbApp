package ibdb.entities.reviews;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToOne;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ibdb.entities.books.Book;
import ibdb.entities.users.UserAccount;

@Entity
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_generator")
	@SequenceGenerator(name = "review_generator", sequenceName = "review_generator", initialValue = 40000, allocationSize = 1)
	private Integer reviewId;
	private String reviewContent;
	private Date publishedAt;
	private Integer rating;
	@JsonIgnoreProperties(value = "reviews", allowSetters = true)
	@ManyToOne
	private UserAccount userAccount;
	@JsonIgnoreProperties("reviews")
	@ManyToOne
	private Book book;
	
	
	
	//--------------------getters and setters--------------//
	public Integer getReviewId() {
		return reviewId;
	}
	public void setReviewId(Integer reviewId) {
		this.reviewId = reviewId;
	}
	public String getReviewContent() {
		return reviewContent;
	}
	public void setReviewContent(String reviewContent) {
		this.reviewContent = reviewContent;
	}
	public Date getPublishedAt() {
		return publishedAt;
	}
	public void setPublishedAt(Date publishedAt) {
		this.publishedAt = publishedAt;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	public UserAccount getUser() {
		return userAccount;
	}
	public void setUser(UserAccount user) {
		this.userAccount = user;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	
	//--------------------constructors------------------//
		
	public Review() {
		super();
	}
	public Review(Integer reviewId, String reviewContent, Date publishedAt, Integer rating, UserAccount user, Book book) {
		super();
		this.reviewId = reviewId;
		this.reviewContent = reviewContent;
		this.publishedAt = publishedAt;
		this.rating = rating;
		this.userAccount = user;
		this.book = book;
	}
	public Review(Integer reviewId, String reviewContent, Date publishedAt, Integer rating) {
		super();
		this.reviewId = reviewId;
		this.reviewContent = reviewContent;
		this.publishedAt = publishedAt;
		this.rating = rating;
	}
		
}
