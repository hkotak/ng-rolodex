import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  value = "";

  contacts: any;
  contactList: Array<Object>

  constructor(private api: ApiService) { }

  loadContacts() {
    // this.contacts = this.api.contacts;
    // console.log("HOME CHARACTERS ARRAY: ", this.characters);

    this.api.getContacts()
      .then((data) => {

        this.contacts = data;
        this.contactList = this.contacts

        console.log("FRONT END DATA: ", data)
        console.log(Array.isArray(data));
        console.log(typeof data);

      })
  }



  ngOnInit() {
    this.loadContacts()
  }

}
