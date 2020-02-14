package ibdb.entities.contact;

import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping
public class Contact {

	private String firstName;
	private String lastName;
	private String fromAddress;
	private String subject;
	private String message;
	
	
	//------getters and setters----
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
	public String getFromAddress() {
		return fromAddress;
	}
	public void setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	//-----constructors------//
	public Contact(String firstName, String lastName, String fromAddress, String subject, String message) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.fromAddress = fromAddress;
		this.subject = subject;
		this.message = message;
	}
	
	public Contact() {
		super();
	}
	
	
}
