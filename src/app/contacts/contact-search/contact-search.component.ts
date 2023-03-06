import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
  }

  search(firstNameTerm: string, lastNameTerm: string): void {
    this.dataStorageService.findContactByFirstNameAndLastName(firstNameTerm, lastNameTerm).subscribe(
      contacts => this.contactsService.publishFilteredContacts(contacts)
    );
  }
}
