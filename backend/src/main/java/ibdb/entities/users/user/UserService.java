package ibdb.entities.users.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

	@Autowired
	private IUsrRepository usrRepository;

	public Optional<User> findById(Long userId) {
		return usrRepository.findById(userId);
	}

	public List<User> findAll() {
		return (List<User>) usrRepository.findAll();
	}

	public void insert(User user) {
		usrRepository.save(user);
	}

	public void update(User usr) {
		usrRepository.save(usr);
	}

	public void deleteById(Long usrId) {
		usrRepository.deleteById(usrId);
	}
	
	public long getCount() {
		return this.usrRepository.count();
	}
}
