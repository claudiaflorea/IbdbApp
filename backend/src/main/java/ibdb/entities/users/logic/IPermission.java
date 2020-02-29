package ibdb.entities.users.logic;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = PermissionDeserializer.class)
public interface IPermission {

	
	// ----- Methods -----
	public boolean canViewReviews();

	public boolean canAddEditData();

	public boolean canCreateReviews();

	public boolean canDeleteData();
}
