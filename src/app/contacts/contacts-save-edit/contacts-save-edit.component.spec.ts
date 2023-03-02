import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSaveEditComponent } from './contacts-save-edit.component';

describe('ContactsSaveEditComponent', () => {
  let component: ContactsSaveEditComponent;
  let fixture: ComponentFixture<ContactsSaveEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsSaveEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsSaveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
