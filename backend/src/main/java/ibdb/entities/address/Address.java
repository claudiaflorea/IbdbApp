package ibdb.entities.address;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "address_generator")
	@SequenceGenerator(name = "address_generator", sequenceName = "address_generator", initialValue = 1000, allocationSize = 1)
	private Integer addressId;
	private String street;
	private Integer streetNumber;
	private Integer zipCode;
	private String city;
	private String country;

	// --------------getters and setters-----------//
	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public Integer getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(Integer streetNumber) {
		this.streetNumber = streetNumber;
	}

	public Integer getZipCode() {
		return zipCode;
	}

	public void setZipCode(Integer zipCode) {
		this.zipCode = zipCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	// -------------------constructors-------------//
	public Address(Integer addressId, String street, Integer streetNumber, Integer zipCode, String city,
			String country) {
		super();
		this.addressId = addressId;
		this.street = street;
		this.streetNumber = streetNumber;
		this.zipCode = zipCode;
		this.city = city;
		this.country = country;
	}

	public Address() {
		super();
	}
	
	

}
