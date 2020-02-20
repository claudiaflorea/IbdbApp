package ibdb.security.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import ibdb.security.model.UserRole;
import ibdb.security.model.UserRoleName;

public interface IUserRoleRepository extends CrudRepository<UserRole, Long> {

	Optional<UserRole> findByName(UserRoleName roleName);

}