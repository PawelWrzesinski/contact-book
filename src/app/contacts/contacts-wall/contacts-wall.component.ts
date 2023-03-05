import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contacts-wall',
  templateUrl: './contacts-wall.component.html',
  styleUrls: ['./contacts-wall.component.css']
})
export class ContactsWallComponent implements OnInit {

  filteredContactsSub: Subscription | undefined;

  contacts$: Observable<Contact[]> | undefined;

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit(): void {

    this.getContacts();
    this.filteredContactsSub = this.contactsService.filteredContacts
      .subscribe(filteredContacts => {
        if (filteredContacts.length > 0) {
          this.contacts$ = of(filteredContacts);
        }
      }
      );
  }

  getContacts() {
    this.contacts$ = this.contactsService.loadContacts();
  }

}
