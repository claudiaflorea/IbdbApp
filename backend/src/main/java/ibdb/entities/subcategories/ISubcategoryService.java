package ibdb.entities.subcategories;

import java.util.List;
import java.util.Optional;

public interface ISubcategoryService {

	public Optional<Subcategory> findSubcategoryById(int subcategoryId);

	public List<Subcategory> findAllSubcategories();

	public void insertSubcategory(Subcategory subcategory);

	public void updateSubcategory(Subcategory subcategory);

	public void deleteSubcategoryById(int subcategoryId);
	
}
