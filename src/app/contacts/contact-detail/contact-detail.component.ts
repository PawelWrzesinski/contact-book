import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.contact = data['contact'];
    });
  }

  onEditContact() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteContact() {
    console.log(this.contact.id);
    this.contactsService.deleteContact(this.contact.id);
    this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
