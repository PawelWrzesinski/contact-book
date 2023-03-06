import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-save-edit',
  templateUrl: './contacts-save-edit.component.html',
  styleUrls: ['./contacts-save-edit.component.css']
})
export class ContactsSaveEditComponent implements OnInit {

  id!: number;
  editMode = false;
  contactForm: FormGroup;
  fb: FormBuilder;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
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


  initForm() {
    let contactFirstName = '';
    let contactLastName = '';
    let contactPhotoUrl = '';
    let contactBirthDate = new Date();

    if (this.editMode) {
      const contact = this.contactsService.getContact(this.id);
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
