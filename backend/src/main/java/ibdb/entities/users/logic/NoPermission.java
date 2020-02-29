package ibdb.entities.users.logic;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(as = NoPermission.class)
public class NoPermission implements IPermission {

	@Override
	public boolean canViewReviews() {
		return false;
	}

	@Override
	public boolean canAddEditData() {
		return false;
	}

	@Override
	public boolean canCreateReviews() {
		return false;
	}

	@Override
	public boolean canDeleteData() {
		return false;
	}
}