package ibdb.entities.categories;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ibdb.utils.DisplayData;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

	@Autowired
	private ICategoryService categoryService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{categoryId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Category> findCategoryById(@PathVariable("categoryId") int categoryId) {
		dataDisplay.printCrudInfo(categoryId); 
		return categoryService.findCategoryById(categoryId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Category> getCategory() {
		dataDisplay.printCrudInfo(); 
		return categoryService.findAllCategories();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertCategory(@RequestBody Category category) {
		dataDisplay.printCrudInfo(); 
		categoryService.insertCategory(category);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateCategory(@RequestBody Category category) {
		dataDisplay.printCrudInfo(); 
		categoryService.updateCategory(category);
	}

	@RequestMapping(value = "/delete/{categoryId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteCategory(@PathVariable("categoryId") int categoryId) {
		dataDisplay.printCrudInfo(categoryId); 
		categoryService.deleteCategoryById(categoryId);
	}
	
}
