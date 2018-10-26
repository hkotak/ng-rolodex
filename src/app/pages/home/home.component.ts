import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "Sanity - Home"

  characters: any[];


  constructor(private backend: BackendService) {
  }


  ngOnInit() {
    this.characters = this.backend.characters;

    // this.backend.addCharacter({ name: 'test add function' });
    // this.characters.push({ name: 'test add data from front end' });

    console.log("HOME CHARACTERS ARRAY: ", this.characters);

    this.backend.getCharacter()
      .then((data) => {
        let people = data['results'];

        console.log("DATA", people)

        for (let i = 0; i < people.length; i++) {
          console.log('MY PEOPLE: ', people[i])
          this.characters.push(people[i])
        }
      })
  }

}


