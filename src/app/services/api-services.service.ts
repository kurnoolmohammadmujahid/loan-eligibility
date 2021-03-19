import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  url = environment.url;
  id: any;

  constructor(private http: HttpClient) { }

  updatePersonalDetails(personalObj: object) {
    this.id = parseInt(localStorage.getItem('customerId'));
    return this.http.put<any>(`${this.url}/loanEligibility/${this.id}`, personalObj)
      .toPromise()
      .then(data => { return data; });
  }

  updateEmployementDetails(employementObj: object) {
    this.id = parseInt(localStorage.getItem('customerId'));
    return this.http.put<any>(`${this.url}/loanEligibility/${this.id}`, employementObj)
      .toPromise()
      .then(data => { return data; });
  }

  updatePropertyDetails(propertyObj: object) {
    this.id = parseInt(localStorage.getItem('customerId'));
    return this.http.put<any>(`${this.url}/loanEligibility/${this.id}`, propertyObj)
      .toPromise()
      .then(data => { return data; });
  }

  getPersonalDetails() {
    return this.http.get<any>(`${this.url}/personal/1`)
      .toPromise()
      .then(data => { return data; });
  }

  getEmployementDetails() {
    return this.http.get<any>(`${this.url}/employee/1`)
      .toPromise()
      .then(data => { return data; });
  }

  getPropertyDetails() {
    return this.http.get<any>(`${this.url}/property/1`)
      .toPromise()
      .then(data => { return data; });
  }

  getAllCustomers() {
    return this.http.get<any>(`${this.url}/loanEligibility`)
      .toPromise()
      .then(data => { return data; });
  }

  getCustomerById() {
    this.id = parseInt(localStorage.getItem('customerId'));
    return this.http.get<any>(`${this.url}/loanEligibility/${this.id}`)
      .toPromise()
      .then(data => { return data; });
  }

  postCustomer(totalObj: object) {
    this.id = parseInt(localStorage.getItem('customerId'));
    return this.http.post<any>(`${this.url}/loanEligibility`, totalObj)
      .toPromise()
      .then(data => { return data; });
  }






}
