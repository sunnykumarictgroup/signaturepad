import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureProcessingComponent } from './signature-processing.component';

describe('SignatureProcessingComponent', () => {
  let component: SignatureProcessingComponent;
  let fixture: ComponentFixture<SignatureProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
