package ibdb.entities.users;

import java.util.List;
import java.util.Optional;

public interface IUserAccountService {

	public Optional<UserAccount> findUserAccountById(int userAccountId);

	public List<UserAccount> findAllUserAccounts();

	public void insertUserAccount(UserAccount userAccount);

	public void updateUserAccount(UserAccount userAccount);

	public void deleteUserAccountById(int userAccountId);
	
	public UserAccount findUserAccountByUsernameAndPassword(String username, String password);
}
