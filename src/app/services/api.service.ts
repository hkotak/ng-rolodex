import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Contact {
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
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl: string = "http://localhost:5000";
  // baseUrl: string = "http://34.219.110.93:5000";

  constructor(private http: HttpClient) { }




  //~~~~ GET ALL CONTACTS FROM BACKEND TO FRONTEND ~~~~//


  getContacts() {
    const url = this.baseUrl + '/api/home';

    return this.http.get(url).toPromise()

  }

  // insertCat(cat: Cat): Observable<Cat> {
  //   return this.http.post<Cat>('http://localhost:8000/api/cats/', cat);
  // }

  //~~~~ ADD NEW CONTACTS FROM FRONTEND TO BACKEND ~~~~//
  addContacts(contact: Contact): Observable<Contact> {
    const url = this.baseUrl + '/api/new-contact';

    return this.http.post<Contact>(url, contact);

  }


  // addContacts() {
  //   const url = this.baseUrl + '/api/new-contact';

  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     .set('Authorization', 'my-auth-token');

  //   return this.http.post(url, JSON.stringify(this.contacts), {
  //     headers: headers
  //   })
  //     .subscribe(data => {
  //       console.log("API SERVICE POST: ", data)
  //     })

  // }
}