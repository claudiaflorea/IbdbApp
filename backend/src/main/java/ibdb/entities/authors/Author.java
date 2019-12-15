package ibdb.entities.authors;

import java.util.Date;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import ibdb.entities.address.Address;

@Entity
public class Author {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "author_generator")
	@SequenceGenerator(name = "author_generator", sequenceName = "author_sequence", initialValue = 1, allocationSize = 1)
	private Integer authorId;
	private String lastName;
	private String firstName;
	private Date birthDate;
	@OneToOne
	private Address address;

	// ----------getters and setters ---------//
	public Integer getAuthorId() {
		return authorId;
	}

	public void setAuthorId(Integer authorId) {
		this.authorId = authorId;
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

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	// ------------------constructors-----------//
	public Author(Integer authorId, String lastName, String firstName, Date birthDate, Address address) {
		super();
		this.authorId = authorId;
		this.lastName = lastName;
		this.firstName = firstName;
		this.birthDate = birthDate;
		this.address = address;
	}

	public Author() {
		super();
	}

	public Author(Integer authorId, String lastName, String firstName, Date birthDate) {
		super();
		this.authorId = authorId;
		this.lastName = lastName;
		this.firstName = firstName;
		this.birthDate = birthDate;
	}

}
