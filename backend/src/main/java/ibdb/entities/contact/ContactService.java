package ibdb.entities.contact;

import java.util.Date;


import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


@Service("contactService")
public class ContactService implements IContactService{

    private JavaMailSender javaMailSender;

    @Autowired
    public ContactService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    @Override
	public void send(
			String firstName, 
			String lastName, 
			String fromAddress, 
			String toAddress, 
			String subject, 
			String message) throws Exception {	
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
		mimeMessageHelper.setFrom(fromAddress);
		mimeMessageHelper.setTo(toAddress);
		mimeMessageHelper.setSubject(subject);
		mimeMessageHelper.setText(message, true);
		mimeMessageHelper.setSentDate(new Date());
		javaMailSender.send(mimeMessage);
	}
    
}