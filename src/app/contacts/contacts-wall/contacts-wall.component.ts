import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactComponent } from '../contact/contact.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contacts-wall',
  templateUrl: './contacts-wall.component.html',
  styleUrls: ['./contacts-wall.component.css']
})
export class ContactsWallComponent implements OnInit {

  contacts$: Observable<Contact[]> | undefined;

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit(): void {
    this.contacts$ = this.contactsService.loadContacts();
  }

}
