package ibdb.entities.roles;

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
@RequestMapping("/role")
@CrossOrigin(origins = "http://localhost:4200")
public class RoleController {

	@Autowired
	private IRoleService roleService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{roleId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Role> findRoleById(@PathVariable("roleId") int roleId) {
		dataDisplay.printCrudInfo(roleId); 
		return roleService.findRoleById(roleId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Role> getRole() {
		dataDisplay.printCrudInfo(); 
		return roleService.findAllRoles();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertRole(@RequestBody Role role) {
		dataDisplay.printCrudInfo(); 
		roleService.insertRole(role);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateRole(@RequestBody Role role) {
		dataDisplay.printCrudInfo(); 
		roleService.updateRole(role);
	}

	@RequestMapping(value = "/delete/{roleId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteReview(@PathVariable("roleId") int roleId) {
		dataDisplay.printCrudInfo(roleId); 
		roleService.deleteRoleById(roleId);
	}
	
}
