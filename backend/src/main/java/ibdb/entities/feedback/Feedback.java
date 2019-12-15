package ibdb.entities.feedback;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ibdb.entities.users.UserAccount;

@Entity
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "feedback_generator")
	@SequenceGenerator(name = "feedback_generator", sequenceName = "feedback_generator", initialValue = 4500, allocationSize = 1)
	private Integer feedbackId;
	private String message;
	private String targetSource;
	@JsonIgnoreProperties("messages")
	@ManyToOne
	private UserAccount sender;

	// -------------getters and setters -------------//
	public Integer getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(Integer feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public UserAccount getSender() {
		return sender;
	}

	public void setSender(UserAccount sender) {
		this.sender = sender;
	}
	public String getTargetSource() {
		return targetSource;
	}

	public void setTargetSource(String targetSource) {
		this.targetSource = targetSource;
	}
	// -------------- constructors -----------//

	public Feedback(Integer feedbackId, String message, String targetSource, UserAccount sender) {
		super();
		this.feedbackId = feedbackId;
		this.message = message;
		this.sender = sender;
		this.targetSource = targetSource;
	}

	public Feedback() {
		super();
	}

	public Feedback(Integer feedbackId, String message, String targetSource) {
		super();
		this.feedbackId = feedbackId;
		this.message = message;
		this.targetSource = targetSource;
	}

}
