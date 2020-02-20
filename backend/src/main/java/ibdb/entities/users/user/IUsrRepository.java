package ibdb.entities.users.user;

import org.springframework.data.repository.CrudRepository;

public interface IUsrRepository extends CrudRepository<User, Long> {
	
	public long count();
	
}