import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl: string = "http://localhost:5000";

  contacts: {};

  constructor(private http: HttpClient) { }




  //~~~~ GET ALL CONTACTS FROM BACKEND TO FRONTEND ~~~~//


  getContacts() {
    const url = this.baseUrl + '/api/home';

    return this.http.get(url).toPromise()

  }

  //~~~~ ADD NEW CONTACTS FROM FRONTEND TO BACKEND ~~~~//
  addContacts() {
    const url = this.baseUrl + '/api/new-contact';

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'my-auth-token');

    return this.http.post(url, JSON.stringify(this.contacts), {
      headers: headers
    })
      .subscribe(data => {
        console.log("API SERVICE POST: ", data)
      })

  }
}