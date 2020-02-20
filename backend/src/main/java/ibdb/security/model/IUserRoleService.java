package ibdb.security.model;
import java.util.Optional;

import ibdb.entities.IEntityService;

public interface IUserRoleService extends IEntityService<UserRole, Long>  {
	
	Optional<UserRole> findByName(UserRoleName roleName);

}
