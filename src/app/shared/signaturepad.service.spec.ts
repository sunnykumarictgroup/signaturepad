import { TestBed } from '@angular/core/testing';

import { SignaturepadService } from './signaturepad.service';

describe('SignaturepadService', () => {
  let service: SignaturepadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignaturepadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
