import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit(): void {
  }

  search(firstNameTerm: string, lastNameTerm: string): void {
    this.contactsService.findContactByFirstNameAndLastName(firstNameTerm, lastNameTerm).subscribe(
      contacts => this.contactsService.publishFilteredContacts(contacts)
    );
  }
}
