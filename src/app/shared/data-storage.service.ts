import { Injectable } from '@angular/core';
import { ContactsService } from '../contacts/contacts.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '../model/contact';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private contactsService: ContactsService,
  ) { }

  fetchContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>('/api/contacts')
      .pipe(
        tap(contacts => {
          this.contactsService.setContacts(contacts);
        })
      );

  }

  findContactByFirstNameAndLastName(
    firstNameTerm: string, lastNameTerm: string): Observable<Contact[]> {
    if (firstNameTerm.trim().length > 0 && lastNameTerm.trim().length > 0) {
      return this.http.get<Contact[]>(`/api/contacts/${firstNameTerm}&${lastNameTerm}`);
    } else {
      return this.http.get<Contact[]>('/api/contacts');
    }
  }

  findContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`/api/contacts/${id}`);
  }

}
