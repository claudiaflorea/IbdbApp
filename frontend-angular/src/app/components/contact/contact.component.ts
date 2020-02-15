import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { FormsModule, FormBuilder }   from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact :any;
  contactForm: any;

  constructor(private http: HttpClient, private emailService :EmailService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      fromAddress: '',
      subject: '',
      message: ''
    });
   }

  ngOnInit() {
  }

  onSubmit(contactData) {
    this.sendEmail(<Contact> contactData);
    this.contactForm.reset();
  }

  sendEmail(contact: Contact) {
    this.emailService.sendEmail(contact).subscribe(
      data => console.log('***************', data)
      );
     alert('Thank you for reaching out to us!' 
     + '\n' + 'Your message has been sent.');
  }

}
