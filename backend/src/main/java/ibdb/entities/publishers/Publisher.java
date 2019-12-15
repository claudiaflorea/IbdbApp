package ibdb.entities.publishers;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToOne;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import ibdb.entities.address.Address;

@Entity
public class Publisher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "publisher_generator")
	@SequenceGenerator(name = "publisher_generator", sequenceName = "publisher_generator", initialValue =20000, allocationSize = 1)
	private Integer publisherId;
	private String publisherName;
	@OneToOne
	private Address address;
	
	//-----------getters and setters----------//
	public Integer getPublisherId() {
		return publisherId;
	}
	public void setPublisherId(Integer publisherId) {
		this.publisherId = publisherId;
	}
	public String getPublisherName() {
		return publisherName;
	}
	public void setPublisherName(String publisherName) {
		this.publisherName = publisherName;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	//---------------constructors ---------------//
	public Publisher(Integer publisherId, String publisherName, Address address) {
		super();
		this.publisherId = publisherId;
		this.publisherName = publisherName;
		this.address = address;
	}
	
	public Publisher(Integer publisherId, String publisherName) {
		super();
		this.publisherId = publisherId;
		this.publisherName = publisherName;
	}
	
	public Publisher() {
		super();
	}
}
