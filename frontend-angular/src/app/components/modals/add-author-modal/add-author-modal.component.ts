import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrls: ['./add-author-modal.component.css']
})
export class AddAuthorModalComponent implements OnInit {

  @Input() id: number;
  addAuthorForm: FormGroup;
  authors: Author[];
  selectedCountry = "--Choose Country--";
  cities: any[];


  countries = [
		{ name: 'Germany',  cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn' ] },
		{ name: 'Spain', cities: ['Barcelona' ] },
		{ name: 'USA', cities: ['Downers Grove'] },
		{ name: 'Mexico', cities: ['Puebla' ] },
		{ name: 'India', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore'] },
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public authorSAervice: AuthorService
  ) {
    this.createForm();
  }

  private createForm() {
    this.addAuthorForm = this.formBuilder.group({
      authorId: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      selectedCountry: '',
      selectedCity: ''
    });
  }

  changeCountry(country) {
		this.cities = this.countries.find(cntry => cntry.name === country).cities;
	}

  private submitForm() {
    this.activeModal.close(this.addAuthorForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  ngOnInit() {
  }

}
