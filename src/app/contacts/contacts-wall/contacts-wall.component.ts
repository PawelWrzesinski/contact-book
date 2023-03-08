import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contacts-wall',
  templateUrl: './contacts-wall.component.html',
  styleUrls: ['./contacts-wall.component.css']
})
export class ContactsWallComponent implements OnInit, OnDestroy {

  filteredContactsSub: Subscription;

  contactsUpdateSub: Subscription;

  contacts: Contact[];

  constructor(
    private contactsService: ContactsService,

    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.contactsUpdateSub = this.contactsService.contactsChanged.subscribe(contacts => {
      console.log('Contacts updated.');
      this.contacts = contacts;
    });

    this.filteredContactsSub = this.contactsService.filteredContacts
      .subscribe(filteredContacts => {
        console.log(`Filtered contacts count: ${filteredContacts.length}`);
        if (filteredContacts.length > 0) {
          this.contacts = filteredContacts;
        }
      }
      );
  }


  onNewContact() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.filteredContactsSub?.unsubscribe();
    this.contactsUpdateSub?.unsubscribe();
  }

}
