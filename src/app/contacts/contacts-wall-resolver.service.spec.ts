import { TestBed } from '@angular/core/testing';

import { ContactsWallResolverService } from './contacts-wall-resolver.service';

describe('ContactsWallResolverService', () => {
  let service: ContactsWallResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsWallResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
