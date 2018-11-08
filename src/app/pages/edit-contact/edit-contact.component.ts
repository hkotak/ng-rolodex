import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contact: any;
  // contactForm: FormGroup ;

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

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private fb: FormBuilder) { }

  updateContact(contactForm) {

    this.route.params.subscribe(params => {
      // this.api.updateContactBackend(name, address, mobile, work, home, email, twitter, instagram, github, params['id']);

      this.api.updateContactBackend(
        this.contactForm.controls.name.value,
        this.contactForm.controls.address.value,
        this.contactForm.controls.mobile.value,
        this.contactForm.controls.work.value,
        this.contactForm.controls.home.value,
        this.contactForm.controls.email.value,
        this.contactForm.controls.twitter.value,
        this.contactForm.controls.instagram.value,
        this.contactForm.controls.github.value,
        params['id']);
      this.router.navigate(['home']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contact = this.api.getContact(params['id']).subscribe(res => {
        this.contact = res;
      });
    });
  }

}
