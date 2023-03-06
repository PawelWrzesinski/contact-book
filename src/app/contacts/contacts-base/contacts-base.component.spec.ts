import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsBaseComponent } from './contacts-base.component';

describe('ContactsBaseComponent', () => {
  let component: ContactsBaseComponent;
  let fixture: ComponentFixture<ContactsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
