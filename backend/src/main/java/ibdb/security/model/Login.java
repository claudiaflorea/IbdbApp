package ibdb.security.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;

import ibdb.entities.users.UserAccount;
import ibdb.entities.users.admin.Admin;
import ibdb.entities.users.user.User;

@Entity
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@NaturalId
	@NotBlank
	@Size(max = 50)
	@Email
	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@NotBlank
	@Size(min = 3, max = 30)
	@Column(name = "username", nullable = false, unique = true)
	private String username;
	private String firstName;
	private String lastName;

	@NotBlank
	@Size(min = 6, max = 100)
	@Column(name = "password", nullable = false)
	private String password;

	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "account")
	private UserAccount account;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<UserRole> roles = new HashSet<UserRole>();

	/* ----- CONSTRUCTORS ----- */
	public Login() {
		super();
	}

	public Login(String firstName, String lastName, String username, String email, String password) {
		super();
		this.email = email;
		this.username = username;
		this.password = password;
		this.account = new Admin(firstName, lastName);
	}

	/* FOR TESTING PURPOSES: Temporary constructor to persist administrators */
	public Login(String firstName, String lastName, String username, String email, String password, String adminWorkaround) {
		super();
		this.email = email;
		this.username = username;
		this.password = password;
		this.account = new User(firstName, lastName);
	}

	//----Getters & Steers ----//
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UserAccount getAccount() {
		return account;
	}

	public void setAccount(UserAccount account) {
		this.account = account;
	}

	public Set<UserRole> getRoles() {
		return roles;
	}

	public void setRoles(Set<UserRole> roles) {
		this.roles = roles;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	
}
