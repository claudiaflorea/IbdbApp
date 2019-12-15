package ibdb.entities.roles;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Role {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_generator")
	@SequenceGenerator(name = "role_generator", sequenceName = "role_generator", initialValue = 50, allocationSize = 1)
	private Integer roleId;
	private String roleName;
	private String roleDescription;
	
	//----------------getters and setters-------------//
	public Integer getRoleId() {
		return roleId;
	}


	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}


	public String getRoleName() {
		return roleName;
	}


	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}


	public String getRoleDescription() {
		return roleDescription;
	}


	public void setRoleDescription(String roleDescription) {
		this.roleDescription = roleDescription;
	}

	
	//----------------constructors--------------//
	
	public Role() {
		super();
	}


	public Role(Integer roleId, String roleName, String roleDescription) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
		this.roleDescription = roleDescription;
	}


	
		
}
