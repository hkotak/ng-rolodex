import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contacts: any;
  contactList: Array<Object>

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
