package ibdb.entities.contact;

public interface IContactService {
	
	public void send(
			String firstName,
			String lastName,
			String fromAddress, 
			String toAddress,
			String subject, 
			String message)
	throws Exception;
	
}
