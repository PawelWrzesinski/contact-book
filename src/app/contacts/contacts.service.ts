import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = [];


  filteredContacts = new Subject<Contact[]>();

  contactsChanged = new BehaviorSubject<Contact[]>([]);

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
    this.contactsChanged.next(this.contacts);
  }

  publishFilteredContacts(contacts: Contact[]) {
    this.filteredContacts.next(contacts);
  }
}