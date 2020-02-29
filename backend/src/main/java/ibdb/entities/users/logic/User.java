package ibdb.entities.users.logic;

public class User implements IPermission {

	@Override
	public boolean canViewReviews() {
		return true;
	}

	@Override
	public boolean canAddEditData() {
		return false;
	}

	@Override
	public boolean canCreateReviews() {
		return true;
	}

	@Override
	public boolean canDeleteData() {
		return false;
	}

}
