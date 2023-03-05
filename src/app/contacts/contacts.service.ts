import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  public filteredContacts = new BehaviorSubject<Contact[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  loadContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>('/api/contacts');

  }

  findContactByFirstNameAndLastName(
    firstNameTerm: string, lastNameTerm: string): Observable<Contact[]> {
    if (firstNameTerm.trim().length > 0 && lastNameTerm.trim().length > 0) {
      return this.http.get<Contact[]>(`/api/contacts/${firstNameTerm}&${lastNameTerm}`);
    } else {
      return this.http.get<Contact[]>('/api/contacts');
    }

  }


  publishFilteredContacts(contacts: Contact[]) {
    this.filteredContacts.next(contacts);
  }

  // searchForContacts(firstNameTerm: string, lastNameTerm: string) {
  //   this.searchTerms.next({ firstNameTerm, lastNameTerm });
  // }
}