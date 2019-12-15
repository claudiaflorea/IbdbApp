package ibdb.entities.subcategories;

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
@RequestMapping("/subcategory")
@CrossOrigin(origins = "http://localhost:4200")
public class SubcategoryController {

	@Autowired
	private ISubcategoryService subcategoryService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{subcategoryId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Subcategory> findSubcategoryById(@PathVariable("subcategoryId") int subcategoryId) {
		dataDisplay.printCrudInfo(subcategoryId); 
		return subcategoryService.findSubcategoryById(subcategoryId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Subcategory> getSubcategory() {
		dataDisplay.printCrudInfo(); 
		return subcategoryService.findAllSubcategories();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertSubcategory(@RequestBody Subcategory subcategory) {
		dataDisplay.printCrudInfo(); 
		subcategoryService.insertSubcategory(subcategory);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateSubcategory(@RequestBody Subcategory subcategory) {
		dataDisplay.printCrudInfo(); 
		subcategoryService.updateSubcategory(subcategory);
	}

	@RequestMapping(value = "/delete/{subcategoryId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteSubcategory(@PathVariable("subcategoryId") int subcategoryId) {
		dataDisplay.printCrudInfo(subcategoryId); 
		subcategoryService.deleteSubcategoryById(subcategoryId);
	}
	
}
