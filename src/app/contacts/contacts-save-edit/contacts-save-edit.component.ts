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

  // id: number;
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
      if (data['contact'] && data['contact'].id) {
        this.contact = data['contact'];
        this.editMode = true;
      }
    });
    this.initForm();
  }

  onSubmit() {
    if (this.editMode) {
      const editedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.contactFirstName,
        lastName: this.contactForm.value.contactLastName,
        birthDate: new Date(
          this.contactForm.value.contactBirthDateYear,
          this.contactForm.value.contactBirthDateMonth,
          this.contactForm.value.contactBirthDateDay
        ),
        photoUrl: this.contactForm.value.contactPhotoUrl
      };
      this.contactsService.updateContact(this.contact.id, this.contact, editedContact);
    } else {

      const newContact: Contact = {
        id: this.genId(),
        firstName: this.contactForm.value.contactFirstName,
        lastName: this.contactForm.value.contactLastName,
        birthDate: new Date(
          this.contactForm.value.contactBirthDateYear,
          this.contactForm.value.contactBirthDateMonth,
          this.contactForm.value.contactBirthDateDay
        ),
        photoUrl: this.contactForm.value.contactPhotoUrl
      };
      this.contactsService.addContact(newContact);
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
    let contactId = 1;
    let contactFirstName = '';
    let contactLastName = '';
    let contactPhotoUrl = '';
    let contactBirthDate = new Date();
    let contactBirthDateYear = contactBirthDate.getFullYear();
    let contactBirthDateMonth = contactBirthDate.getMonth() + 1;
    let contactBirthDateDay = contactBirthDate.getDate();


    if (this.editMode) {
      const contact = this.contact;
      contactId = contact.id;
      contactFirstName = contact.firstName;
      contactLastName = contact.lastName;
      contactBirthDate = new Date(contact.birthDate);
      contactBirthDateYear = contactBirthDate.getFullYear();
      contactBirthDateMonth = contactBirthDate.getMonth();
      contactBirthDateDay = contactBirthDate.getDate();
      contactPhotoUrl = contact.photoUrl;
    }

    this.contactForm = new FormGroup({
      contactFirstName: new FormControl(
        contactFirstName, Validators.required),
      contactLastName: new FormControl(
        contactLastName, Validators.required),
      contactPhotoUrl: new FormControl(
        contactPhotoUrl, Validators.required),
      contactBirthDateYear: new FormControl(
        contactBirthDateYear, Validators.required),
      contactBirthDateMonth: new FormControl(
        contactBirthDateMonth, Validators.required),
      contactBirthDateDay: new FormControl(
        contactBirthDateDay, Validators.required)
    });
  }

}
