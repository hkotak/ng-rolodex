import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }


  //~~~~ GET ALL CONTACTS FROM BACKEND TO FRONTEND ~~~~//
  getContacts() {
    const url = this.baseUrl + '/api/home';

    return this.http.get(url).toPromise()

  }
}