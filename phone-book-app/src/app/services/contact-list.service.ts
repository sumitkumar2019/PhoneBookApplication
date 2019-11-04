import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  
  private baseUrl = "http://localhost:3000/phonebook/api";
  
  newContact:Contact;

  constructor(private http:HttpClient) {}
  
  getAllContact() : Observable<Contact[]> {
    console.log('inside ContactListService getAllContact() method');
    return this.http.get<Contact[]>(this.baseUrl + '/getAllContact');
  }

  getContactById(id: number): Observable<Contact> {
    console.log('inside ContactListService getContactById() method');
    return this.http.get<Contact>(this.baseUrl + '/getContactById/' + id);
  }

  createContact(): Observable<Contact[]> {
    if(this.newContact._id!==null){
      console.log('inside ContactListService updateContact() method' + JSON.stringify(this.newContact));
      return this.http.put<Contact[]>(this.baseUrl + '/updateContact', {contact:this.newContact});
    }
    console.log('inside ContactListService createContact() method'+ JSON.stringify(this.newContact));
    return this.http.post<Contact[]>(this.baseUrl+ '/createContact', {contact:this.newContact});
  }

  updateContact(contact: Contact): Observable<Contact[]> {
    console.log('inside ContactListService updateContact() method');
    return this.http.put<Contact[]>(this.baseUrl + '/updateContact', contact);
  }

  deleteContact(id: number){
    return this.http.get(this.baseUrl + '/deleteContact/'+ id);
  }
}