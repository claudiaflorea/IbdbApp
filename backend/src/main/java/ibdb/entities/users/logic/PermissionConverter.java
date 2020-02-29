package ibdb.entities.users.logic;

import javax.persistence.AttributeConverter;

public class PermissionConverter implements AttributeConverter<IPermission, String> {

	@Override
	public String convertToDatabaseColumn(IPermission permission) {
		return permission.getClass().getSimpleName().toLowerCase();
	}

	@Override
	public IPermission convertToEntityAttribute(String dbData) {
		if (dbData.equalsIgnoreCase("Admin")) {
			return new Admin();
		} else if (dbData.equalsIgnoreCase("Operator")) {
			return new Operator();
		} else if (dbData.equalsIgnoreCase("User")) {
			return new User();
		} else if (dbData.equalsIgnoreCase("NoPermission")) {
			return new NoPermission();
		}

		return null;
	}
	

}
