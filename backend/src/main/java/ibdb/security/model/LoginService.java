package ibdb.security.model;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import ibdb.security.repository.ILoginRepository;

public class LoginService implements ILoginService {

	@Autowired
	private ILoginRepository loginRepository;

	public Optional<Login> findById(Long loginId) {
		return loginRepository.findById(loginId);
	}

	public List<Login> findAll() {
		return (List<Login>) loginRepository.findAll();
	}

	public void insert(Login login) {
		loginRepository.save(login);
	}

	public void update(Login login) {
		loginRepository.save(login);
	}

	public void deleteById(Long loginId) {
		loginRepository.deleteById(loginId);
	}
	
}
