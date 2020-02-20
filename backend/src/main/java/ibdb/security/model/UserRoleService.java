package ibdb.security.model;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ibdb.security.repository.IUserRoleRepository;

@Service
public class UserRoleService implements IUserRoleService {

	@Autowired
	private IUserRoleRepository roleRepository;

	public Optional<UserRole> findById(Long roleId) {
		return roleRepository.findById(roleId);
	}

	public List<UserRole> findAll() {
		return (List<UserRole>) roleRepository.findAll();
	}

	public void insert(UserRole role) {
		roleRepository.save(role);
	}

	public void update(UserRole role) {
		roleRepository.save(role);
	}

	public void deleteById(Long roleId) {
		roleRepository.deleteById(roleId);
	}

	public Optional<UserRole> findByName(UserRoleName roleName) {
		return this.roleRepository.findByName(roleName);
	}
}
