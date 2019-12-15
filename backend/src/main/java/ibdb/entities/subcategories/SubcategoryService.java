package ibdb.entities.subcategories;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubcategoryService implements ISubcategoryService {

	@Autowired
	private ISubcategoryRepository subcategoryRepository;

	public Optional<Subcategory> findSubcategoryById(int subcategoryId) {
		return subcategoryRepository.findById(subcategoryId);
	}

	public List<Subcategory> findAllSubcategories() {
		return (List<Subcategory>) subcategoryRepository.findAll();
	}

	public void insertSubcategory(Subcategory subcategory) {
		subcategoryRepository.save(subcategory);
	}

	public void updateSubcategory(Subcategory subcategory) {
		subcategoryRepository.save(subcategory);
	}

	public void deleteSubcategoryById(int subcategoryId) {
		subcategoryRepository.deleteById(subcategoryId);
	}

}

