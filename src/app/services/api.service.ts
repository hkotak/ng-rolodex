import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl: string = "http://localhost:5000/api/";
  // baseUrl: string = "http://34.219.110.93:5000";

  result: any;
  constructor(private http: HttpClient) { }


  //~~~~ GET ALL CONTACTS FROM BACKEND TO FRONTEND ~~~~//
  getContacts() {
    const url = this.baseUrl + '/contacts';

    return this.http.get(url).toPromise()
  }

  //~~~~ ADD NEW CONTACTS FROM FRONTEND TO BACKEND ~~~~//
  addContacts(name, address, mobile, work, home, email, twitter, instagram, github) {
    const url = this.baseUrl + 'new-contact';
    const obj = {
      name: name,
      address: address,
      mobile: mobile,
      work: work,
      home: home,
      email: email,
      twitter: twitter,
      instagram: instagram,
      github: github,
      created_by: 1
    };
    console.log("API.SERVICE OBJ: ", obj)

    this.http.post(url, obj)
      .subscribe(res => {
        console.log('Contact Added')
      })
  }

  //~~~~ GET BY ID ~~~~//
  getContact(id) {
    let url = this.baseUrl + 'contacts/' + id;

    return this.http.get(url).pipe(map(res => {
      console.log("API GET RES: ", res)

      return res;
    }))

  }

  //~~~~ DELETE SELECTED CONTACT BY ID ~~~~//
  deleteContactBackend(id) {
    let url = this.baseUrl + 'contacts/' + id;
    // let url = "http://localhost:5000/api/contacts/" + id

    return this.http.delete(url).pipe(map(res => {
      console.log("API DELETE RES: ", res)

      return res;
    }))
  }

  //~~~~ UPDATE SELECTED CONTACT BY ID ~~~~//
  updateContactBackend(name, address, mobile, work, home, email, twitter, instagram, github, id) {
    let url = this.baseUrl = '/contact/update/' + id;

    const obj = {
      name: name,
      address: address,
      mobile: mobile,
      work: work,
      home: home,
      email: email,
      twitter: twitter,
      instagram: instagram,
      github: github,
      created_by: 1
    };
    this.http.put(url, obj).subscribe(res => {
      console.log('Contact Updated');
    })
  }


}
