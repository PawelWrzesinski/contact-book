import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, concat, Observable, Subject } from 'rxjs';
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

  getContact(contactId: number) {
    const index: number = this.contacts.findIndex(contact =>
      contactId === contact.id);
    return this.contacts[index];
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts.slice());
  }

  updateContact(currentContactId: number, currentContact: Contact, editedContact: Contact) {
    // console.log(this.contacts);
    // console.log('ID', currentContactId);
    // console.log(currentContact);
    // console.log(editedContact);
    // const contact = this.contacts.filter(contact => contact.id === currentContactId);

    // const index: number = this.contacts.findIndex(contactSearch =>
    //   contact[0].id === currentContact.id);
    const index: number = this.contacts.findIndex(contact =>
      currentContactId === contact.id);
    console.log('INDEX', index);
    this.contacts[index] = editedContact;
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
