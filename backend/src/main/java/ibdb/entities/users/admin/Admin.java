package ibdb.entities.users.admin;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import ibdb.entities.address.Address;
import ibdb.entities.reviews.Review;
import ibdb.entities.roles.Role;
import ibdb.entities.users.UserAccount;

@Entity
@JsonDeserialize(as = Admin.class)
public class Admin extends UserAccount {


	/* ----- CONSTRUCTORS ----- */
	public Admin() {
		super();
	}

	public Admin(Integer userId, String emailAddress, String lastName, String firstName, String gender, String username,
			String password, Date birthDate, Address address, String image, List<Review> reviews, Role role) {
		super(userId, emailAddress, lastName, firstName, gender, username, password, birthDate, address, image, reviews, role);
	}

	public Admin(Integer userId, String emailAddress, String lastName, String firstName, String gender, String username,
			String password, Date birthDate) {
		super(userId, emailAddress, lastName, firstName, gender, username, password, birthDate);
	}

	public Admin(String firstName, String lastName) {
		
	}

	
}
