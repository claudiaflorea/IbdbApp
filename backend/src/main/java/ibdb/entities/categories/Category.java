package ibdb.entities.categories;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ibdb.entities.subcategories.Subcategory;

@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_generator")
	@SequenceGenerator(name = "category_generator", sequenceName = "category_generator", initialValue = 300, allocationSize = 1)
	private Integer categoryId;
	private String categoryName;
	@JsonIgnoreProperties("category")
	@OneToMany(mappedBy = "category")
	private List<Subcategory> subcategories;

	// -----------------getters and setters------------//
	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public List<Subcategory> getSubcategories() {
		return subcategories;
	}

	public void setSubcategories(List<Subcategory> subcategories) {
		this.subcategories = subcategories;
	}

	// ----------------constructors------------//
	public Category() {
		super();
		this.subcategories = new ArrayList<Subcategory>();
	}

	public Category(Integer categoryId, String categoryName) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.subcategories = new ArrayList<Subcategory>();
	}

	// ----- methods ------ //
	public void addSubcategory(Subcategory subcategory) {
		this.subcategories.add(subcategory);
		subcategory.setCategory(this);
	}

}
