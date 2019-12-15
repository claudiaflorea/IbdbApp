package ibdb.entities.roles;

import java.util.List;
import java.util.Optional;

public interface IRoleService {

	public Optional<Role> findRoleById(int roleId);

	public List<Role> findAllRoles();

	public void insertRole(Role role);

	public void updateRole(Role role);

	public void deleteRoleById(int roleId);
	
}
