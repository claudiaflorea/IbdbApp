package ibdb.entities.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ibdb.utils.DisplayData;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/contact")
public class ContactController {

  @Autowired
  private ContactService contactService;
  	
	@Autowired
	private DisplayData dataDisplay;
 
  	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  	public String index(ModelMap modelMap) {
  		modelMap.put("contact", new Contact());
  		return "contact/index";
  	}

  	@PostMapping(value = "/send", consumes = MediaType.APPLICATION_JSON_VALUE)
  	public void send(@RequestBody Contact contact, ModelMap modelMap) {
  		try {
  			contactService.send(
  					contact.getFromAddress(), 
  					"ibdb.company@gmail.com",
  					contact.getFirstName(), 
  					contact.getLastName(), 
  					contact.getSubject(), 
  					contact.getMessage()
  					);
  			
  		  	dataDisplay.printCrudInfo(); 
  		  	
  		} catch (Exception e) {
  			e.printStackTrace();
  		}
  	}
  
}