import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  contact: Contact;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
