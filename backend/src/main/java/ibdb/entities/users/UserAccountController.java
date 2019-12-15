package ibdb.entities.users;

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
@RequestMapping("/userAccount")
@CrossOrigin(origins = "http://localhost:4200")
public class UserAccountController {

	@Autowired
	private IUserAccountService userAccountService;
	
	@Autowired
	private DisplayData dataDisplay;

	@RequestMapping(value = "/{userAccountId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<UserAccount> findAccountById(@PathVariable("userAccountId") int userAccountId) {
		dataDisplay.printCrudInfo(userAccountId);
		return userAccountService.findUserAccountById(userAccountId);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<UserAccount> getUserAccounts() {
		dataDisplay.printCrudInfo();
		return userAccountService.findAllUserAccounts();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertUserAccount(@RequestBody UserAccount userAccount) {
		userAccountService.insertUserAccount(userAccount);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateUserAccount(@RequestBody UserAccount userAccount) {
		dataDisplay.printCrudInfo();
		userAccountService.updateUserAccount(userAccount);
	}

	@RequestMapping(value = "/delete/{userAccountId}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteUserAccount(@PathVariable("userAccountId") int userAccountId) {
		dataDisplay.printCrudInfo(userAccountId);
		userAccountService.deleteUserAccountById(userAccountId);
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public UserAccount findUserAccountByUsernameAndPassword(@RequestBody UserAccount userAccount) {
		dataDisplay.printCrudInfo(); 
		return userAccountService.findUserAccountByUsernameAndPassword(userAccount.getUsername(), userAccount.getPassword());
	}
}
