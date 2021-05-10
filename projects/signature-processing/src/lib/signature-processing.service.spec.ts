import { TestBed } from '@angular/core/testing';

import { SignatureProcessingService } from './signature-processing.service';

describe('SignatureProcessingService', () => {
  let service: SignatureProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatureProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
