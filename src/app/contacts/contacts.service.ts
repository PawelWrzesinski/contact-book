import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = [];


  public filteredContacts = new Subject<Contact[]>();

  public contactsChanged = new Subject<Contact[]>();

  constructor(
    private http: HttpClient
  ) { }

  setContacts(contacts: Contact[]) {
    this.contacts = contacts;
    this.contactsChanged.next(this.contacts.slice());
  }

  getContacts() {
    return this.contacts.slice();
  }

  getContact(index: number) {
    return this.contacts[index];
  }

  deleteContact(index: number) {
    console.log(`DELETING contact with id : ${index}`);
    // this.contacts.splice(index, 1);
    this.contacts = this.contacts.filter(contact => contact.id != index);

    console.log(`Contacts lenght : ${this.contacts.length}`);
    console.log(this.contacts);
    this.contactsChanged.next(this.contacts);
  }

  publishFilteredContacts(contacts: Contact[]) {
    this.filteredContacts.next(contacts);
  }

  // loadContacts(): Observable<Contact[]> {

  //   return this.http.get<Contact[]>('/api/contacts');

  // }

  // findContactByFirstNameAndLastName(
  //   firstNameTerm: string, lastNameTerm: string): Observable<Contact[]> {
  //   if (firstNameTerm.trim().length > 0 && lastNameTerm.trim().length > 0) {
  //     return this.http.get<Contact[]>(`/api/contacts/${firstNameTerm}&${lastNameTerm}`);
  //   } else {
  //     return this.http.get<Contact[]>('/api/contacts');
  //   }

  // }



}