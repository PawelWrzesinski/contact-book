import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
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
  recipeForm!: FormGroup;

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
  initForm() {
    let contactFirstName = '';
    let contactLastName = '';
    let contactBirthDate = new Date();

    if (this.editMode) {
      const contact = this.contactsService.getContact(this.id);
      contactFirstName = contact.firstName;
      contactLastName = contact.lastName;
      contactBirthDate = contact.birthDate;
    }
  }

}
