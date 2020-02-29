package ibdb.entities.users.logic;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(as = Admin.class)
public class Admin implements IPermission {

	// ----- Constructors -----
	public Admin() {

	}

	// ----- Methods -----
	public boolean canViewReviews() {
		return true;
	}

	public boolean canAddEditData() {
		return true;
	}

	public boolean canCreateReviews() {
		return true;
	}

	public boolean canDeleteData() {
		return true;
	}

}