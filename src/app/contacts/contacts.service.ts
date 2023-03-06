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

  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts.slice());
  }

  updateContact(index: number, newContact: Contact) {
    this.contacts[index] = newContact;
    this.contactsChanged.next(this.contacts.slice());
  }

  deleteContact(index: number) {
    console.log(`DELETING contact with id : ${index}`);
    this.contacts = this.contacts.filter(contact => contact.id != index);
    this.contactsChanged.next(this.contacts);
  }

  publishFilteredContacts(contacts: Contact[]) {
    this.filteredContacts.next(contacts);
  }
}