package ibdb.security.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import ibdb.security.model.Login;

public interface ILoginRepository extends CrudRepository<Login, Long> {

	Optional<Login> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
}