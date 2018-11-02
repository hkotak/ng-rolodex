import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { isArray } from 'util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  value = "";

  contacts: any;
  contactList: Array<Object>



  constructor(private api: ApiService) {
  }


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



        // if (this.contacts.length > 0) {
        //   return this.contacts
        // } else {
        //   console.log('is else block executing')

        //   for (let i = 0; i < this.contacts.length; i++) {
        //     console.log('MY PEOPLE: ', this.contacts[i])
        //     this.contacts.push(data[i])
        //   }
        // }
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



}


