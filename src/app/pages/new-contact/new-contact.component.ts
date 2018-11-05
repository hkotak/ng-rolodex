import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contacts: {
    name: string,
    address: string,
    mobile: string,
    work: string,
    home: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string,
    created_by: 1
  };
  contactList: Array<Object>

  constructor(private api: ApiService) { }

  newContact() {
    console.log('FIRING');

    this.api.addContacts(this.contacts)
    console.log(this.contacts);

  }

  ngOnInit() {
  }

}
