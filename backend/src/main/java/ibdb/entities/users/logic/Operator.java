package ibdb.entities.users.logic;

public class Operator implements IPermission{

	@Override
	public boolean canViewReviews() {
		return true;
	}

	@Override
	public boolean canAddEditData() {
		return true;
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
