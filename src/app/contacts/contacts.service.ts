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

  getContact(id: number) {
    return this.contacts[id - 1];
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts.slice());
  }

  updateContact(id: number, newContact: Contact) {
    this.contacts[id] = newContact;
    this.contactsChanged.next(this.contacts.slice());
  }

  deleteContact(id: number) {
    console.log(`DELETING contact with id : ${id}`);
    this.contacts = this.contacts.filter(contact => contact.id != id);
    this.contactsChanged.next(this.contacts);
  }

  publishFilteredContacts(contacts: Contact[]) {
    this.filteredContacts.next(contacts);
  }
}