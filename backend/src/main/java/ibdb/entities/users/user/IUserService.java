package ibdb.entities.users.user;

import ibdb.entities.IEntityService;

public interface IUserService extends IEntityService<User, Long> {

	public long getCount();
	
}