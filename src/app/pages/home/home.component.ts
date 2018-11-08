import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { HttpClient } from '@angular/common/http'
import { isArray } from 'util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  value = "";

  contacts: any;
  // contactList: Array<Object>



  constructor(private http: HttpClient, private api: ApiService) {
  };


  loadContacts() {
    // this.contacts = this.api.contacts;
    // console.log("HOME CHARACTERS ARRAY: ", this.characters);

    this.api.getContacts()
      .then((data) => {

        this.contacts = data;
        // this.contactList = this.contacts

        // console.log("FRONT END DATA: ", this.contactList)
        // console.log(Array.isArray(data));
        // console.log(typeof data);
      })
      .catch(err => {
        console.log('HOME COMPONENT ERROR: ', err)
      })
  }

  showAll() {
    let cards = document.getElementsByClassName('cards');
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
      // console.log('cards', cards[i]);

      if ((cards[i] as HTMLElement).style.display === "none") {
        (cards[i] as HTMLElement).style.display = "block";
      } else {
        (cards[i] as HTMLElement).style.display = "none";
      }
    }
  }

  showCards() {
    console.log(this.value);

    let search = this.value.toLowerCase();
    // console.log(search)

    let cards = document.getElementsByClassName('cards');
    let names = document.getElementsByClassName('name');

    for (let i = 0; i < names.length; i++) {
      if (names[i].innerHTML.toLowerCase().startsWith(search)) {
        // console.log(true);
        (cards[i] as HTMLElement).style.display = "block";
      } else {
        (cards[i] as HTMLElement).style.display = "none";
      }

      if (search === "") {
        (cards[i] as HTMLElement).style.display = "none";
      }
    }
  }


  ngOnInit() {
    this.loadContacts()
  }

  deleteContact(id) {
    this.api.deleteContactBackend(id).subscribe(res => {
      window.alert("Are you sure?");
      window.location.href = "/home";
      console.log('Deleted');
    });
  }




}


