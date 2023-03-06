import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, first } from 'rxjs';
import { Contact } from '../model/contact';
import { DataStorageService } from '../shared/data-storage.service';
import { ContactsService } from './contacts.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsEditResolverService implements Resolve<Contact> {

  constructor(
    private dataStorageService: DataStorageService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Contact> {
    return this.dataStorageService
      .findContactById(+route.params['id']);
  }
}
