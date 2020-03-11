package ibdb.entities.subcategories;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ibdb.entities.categories.Category;

@Entity
public class Subcategory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subcategory_generator")
	@SequenceGenerator(name = "role_generator", sequenceName = "role_generator", initialValue = 990, allocationSize = 1)
	private Integer id;
	private String subcategoryName;
	@JsonIgnoreProperties("subcategories")
	@ManyToOne
	private Category category;
	
	//----------------getters and setters ------------//
	
	public Integer getid() {
		return id;
	}

	public void setid(Integer id) {
		this.id = id;
	}

	public String getSubcategoryName() {
		return subcategoryName;
	}

	public void setSubcategoryName(String subcategoryName) {
		this.subcategoryName = subcategoryName;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
		

	//-------------------constructors-----------------//
	public Subcategory() {
		super();
	}
	public Subcategory(Integer id, String subcategoryName, Category category) {
		super();
		this.id = id;
		this.subcategoryName = subcategoryName;
		this.category = category;
	}

	public Subcategory(Integer id, String subcategoryName) {
		super();
		this.id = id;
		this.subcategoryName = subcategoryName;
	}
	
	
}
