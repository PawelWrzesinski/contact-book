import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactsService } from './contacts.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsWallResolverService implements Resolve<Contact[]>{

  constructor(
    private contactsService: ContactsService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contact[] | Observable<Contact[]> | Promise<Contact[]> {
    return this.contactsService.getContacts();
  }
}
