import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  title: string = "ROLODEX"

  constructor() { }

  ngOnInit() {
  }

}
