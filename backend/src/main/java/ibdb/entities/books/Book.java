package ibdb.entities.books;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import ibdb.entities.authors.Author;
import ibdb.entities.publishers.Publisher;
import ibdb.entities.reviews.Review;
import ibdb.entities.subcategories.Subcategory;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_generator")
	@SequenceGenerator(name = "book_generator", sequenceName = "book_generator", initialValue = 10000, allocationSize = 1)
	private Integer bookId;
	private String ISBN;
	private String title;
	@JsonProperty("publisher")
	@ManyToOne
	private Publisher publisher;
	@JsonProperty("author")
	@ManyToOne
	private Author author;
	@JsonProperty("subcategory")
	@ManyToOne
	private Subcategory subcategory;
	private Date publishDate;
	private String image;
	@JsonIgnoreProperties("book")
	@OneToMany(mappedBy = "book")
	private List<Review> reviews;

	// ------------getters and setters--------//
	public String getISBN() {
		return ISBN;
	}

	public void setISBN(String iSBN) {
		ISBN = iSBN;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Publisher getPublisher() {
		return publisher;
	}

	public void setPublisher(Publisher publisher) {
		this.publisher = publisher;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	public Subcategory getSubcategory() {
		return subcategory;
	}

	public void setSubcategory(Subcategory subcategory) {
		this.subcategory = subcategory;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public Date getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}

	// --------------------constructors------------//
	public Book(Integer bookId, String ISBN, String title, Publisher publisher, Author author, Subcategory subcategory,
			Date publishDate, String image) {
		super();
		this.bookId = bookId;
		this.ISBN = ISBN;
		this.title = title;
		this.publisher = publisher;
		this.author = author;
		this.subcategory = subcategory;
		this.publishDate = publishDate;
		this.image = image;
		this.reviews = new ArrayList<Review>();
	}

	public Book(Integer bookId, String ISBN, String title) {
		super();
		this.bookId = bookId;
		this.ISBN = ISBN;
		this.title = title;
		this.reviews = new ArrayList<Review>();
	}

	public Book() {
		super();
	}
	
}
