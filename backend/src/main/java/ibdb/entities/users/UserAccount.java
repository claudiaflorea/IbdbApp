package ibdb.entities.users;

import java.util.ArrayList;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ibdb.entities.address.Address;
import ibdb.entities.feedback.Feedback;
import ibdb.entities.reviews.Review;
import ibdb.entities.roles.Role;

@Entity
public class UserAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
	@SequenceGenerator(name = "user_generator", sequenceName = "user_generator", initialValue = 9900, allocationSize = 1)
	private Integer userId;
	private String emailAddress;
	private String lastName;
	private String firstName;
	private String gender;
	private String username;
	private String password;
	private Date birthDate;
	@OneToOne
	private Address address;
	private String image;
	@JsonIgnoreProperties(value = "user", allowSetters = true)
	@OneToMany(mappedBy = "userAccount")
	private List<Review> reviews;
	@JsonIgnoreProperties(value = "sender", allowSetters = true)
	@OneToMany(mappedBy = "sender")
	private List<Feedback> messages;
	@ManyToOne(cascade = CascadeType.ALL)
	private Role role;
	// -----------------getters and setters--------------//

	public Integer getUserId() {
		return userId;
	}
	
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
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

	public void setReviewss(List<Review> reviews) {
		this.reviews = reviews;
	}

	public String getUsername() {
		return username;
	}

	public void setUsermane(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public List<Feedback> getMessages() {
		return messages;
	}

	public void setMessages(List<Feedback> messages) {
		this.messages = messages;
	}
	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	// -------------------constructors--------------//
	public UserAccount() {
		super();
		this.reviews = new ArrayList<Review>();
		this.messages = new ArrayList<Feedback>();
		this.role = new Role();
	}

	public UserAccount(Integer userId, String emailAddress, String lastName, String firstName,
			String gender, String username, String password, Date birthDate, Address address, String image, 
			List<Review> reviews, Role role) {
		super();
		this.userId = userId;
		this.emailAddress = emailAddress;
		this.lastName = lastName;
		this.firstName = firstName;
		this.gender = gender;
		this.username = username;
		this.password = password;
		this.birthDate = birthDate;
		this.address = address;
		this.image = image;
		this.reviews = reviews;
		this.reviews = new ArrayList<Review>();
		this.messages = new ArrayList<Feedback>();
		this.role = role;
	}

	public UserAccount(Integer userId, String emailAddress, String lastName, String firstName,
			String gender, String username, String password, Date birthDate) {
		super();
		this.userId = userId;
		this.emailAddress = emailAddress;
		this.lastName = lastName;
		this.firstName = firstName;
		this.gender = gender;
		this.username = username;
		this.password = password;
		this.birthDate = birthDate;
	}
	
	/*
	public UserAccount(Integer userId, String firstName, String lastName, String emailAddress,
			String gender, String username, String password, Date birthDate) {
		super();
		this.userId = userId;
		this.lastName = lastName;
		this.firstName = firstName;
		this.emailAddress = emailAddress;
		this.gender = gender;
		this.birthDate = birthDate;
		this.username = username;
		this.password = password;
	}*/

//	public void setRole(Optional<Role> findRoleById) {
//		// TODO Auto-generated method stub
//	}

}
