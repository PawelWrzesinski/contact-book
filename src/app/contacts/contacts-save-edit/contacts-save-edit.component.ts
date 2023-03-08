import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-save-edit',
  templateUrl: './contacts-save-edit.component.html',
  styleUrls: ['./contacts-save-edit.component.css']
})
export class ContactsSaveEditComponent implements OnInit {

  id: number;
  editMode = false;
  contactForm: FormGroup;
  fb: FormBuilder;
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.contact = data['contact'];
      this.editMode = this.contact.id != null;
      this.initForm();
    });

  }

  onSubmit() {
    if (this.editMode) {
      this.contactsService.updateContact(this.id, this.contactForm.value);
    } else {
      this.contactsService.addContact(this.contactForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }


  genId(): number {
    const contacts: Contact[] = this.contactsService.getContacts();
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  }

  initForm() {
    let contactId = this.genId();
    let contactFirstName = '';
    let contactLastName = '';
    let contactPhotoUrl = '';
    let contactBirthDate = new Date();

    if (this.editMode) {
      // const contact = this.contactsService.getContact(this.id);
      const contact = this.contact;
      contactId = contact.id;
      contactFirstName = contact.firstName;
      contactLastName = contact.lastName;
      contactBirthDate = contact.birthDate;
      contactPhotoUrl = contact.photoUrl;
    }

    this.contactForm = new FormGroup({
      contactFirstName: new FormControl(contactFirstName, Validators.required),
      contactLastName: new FormControl(contactLastName, Validators.required),
      contactPhotoUrl: new FormControl(contactPhotoUrl, Validators.required),
      contactBirthDate: new FormControl(contactBirthDate, Validators.required)
    });

  }

}
