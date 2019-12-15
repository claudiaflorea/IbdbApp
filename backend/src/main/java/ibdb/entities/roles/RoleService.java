package ibdb.entities.roles;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService implements IRoleService {

	@Autowired
	private IRoleRepository roleRepository;

	public Optional<Role> findRoleById(int roleId) {
		return roleRepository.findById(roleId);
	}

	public List<Role> findAllRoles() {
		return (List<Role>) roleRepository.findAll();
	}

	public void insertRole(Role role) {
		roleRepository.save(role);
	}

	public void updateRole(Role role) {
		roleRepository.save(role);
	}

	public void deleteRoleById(int roleId) {
		roleRepository.deleteById(roleId);
	}

}

