package ibdb.entities.permissions;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;

import ibdb.entities.roles.Role;

@Entity
public class Permission {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "permission_generator")
	@SequenceGenerator(name = "permission_generator", sequenceName = "permission_generator", initialValue = 700, allocationSize = 1)
	private Integer permissionId;
	private String permissionName;
	private String permissionDescription;
	@ManyToMany
	@JoinTable(name = "Role_Permission", joinColumns = { @JoinColumn(name = "permissionId") }, inverseJoinColumns = {
			@JoinColumn(name = "roleId") })
	private List<Role> roles;

	// ------------------getters and setters--------------//
	public Integer getPermissionId() {
		return permissionId;
	}

	public void setPermissionId(Integer permissionId) {
		this.permissionId = permissionId;
	}

	public String getPermissionName() {
		return permissionName;
	}

	public void setPermissionName(String permissionName) {
		this.permissionName = permissionName;
	}

	public String getPermissionDescription() {
		return permissionDescription;
	}

	public void setPermissionDescription(String permissionDescription) {
		this.permissionDescription = permissionDescription;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	// ----------------constructors----------------//
	public Permission() {
		super();
		this.roles = new ArrayList<Role>();
	}

	public Permission(Integer permissionId, String permissionName, String permissionDescription, List<Role> roles) {
		super();
		this.roles = new ArrayList<Role>();
		this.permissionId = permissionId;
		this.permissionName = permissionName;
		this.permissionDescription = permissionDescription;
		this.roles = new ArrayList<Role>();
	}
	
	public Permission(Integer permissionId, String permissionName, String permissionDescription) {
		super();
		this.roles = new ArrayList<Role>();
		this.permissionId = permissionId;
		this.permissionName = permissionName;
		this.permissionDescription = permissionDescription;
	}
}
