import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'contacts-base',
  templateUrl: './contacts-base.component.html',
  styleUrls: ['./contacts-base.component.css']
})
export class ContactsBaseComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {

    this.getContacts();
  }

  getContacts() {
    console.log(`Fetch contacts`);
    this.dataStorageService.fetchContacts().subscribe();

  }
}
