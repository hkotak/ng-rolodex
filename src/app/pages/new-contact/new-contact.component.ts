import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    work: new FormControl(''),
    home: new FormControl(''),
    email: new FormControl(''),
    twitter: new FormControl(''),
    instagram: new FormControl(''),
    github: new FormControl('')
  });




  constructor(private api: ApiService) { }


  addContact(contactForm) {
    console.log(this.contactForm.value);
    console.log(this.contactForm.get('name').value);

    this.api.addContacts(
      this.contactForm.controls.name.value,
      this.contactForm.controls.address.value,
      this.contactForm.controls.mobile.value,
      this.contactForm.controls.work.value,
      this.contactForm.controls.home.value,
      this.contactForm.controls.email.value,
      this.contactForm.controls.twitter.value,
      this.contactForm.controls.instagram.value,
      this.contactForm.controls.github.value
    );
  }



  ngOnInit() {
    console.log(name);

  }

}
