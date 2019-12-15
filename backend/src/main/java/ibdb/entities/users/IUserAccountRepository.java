package ibdb.entities.users;

import org.springframework.data.repository.CrudRepository;

public interface IUserAccountRepository extends CrudRepository<UserAccount, Integer> {
	
	public UserAccount findUserAccountByUsernameAndPassword(String username, String password);

}