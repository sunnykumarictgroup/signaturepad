import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureProcessingUnitComponent } from './signature-processing-unit.component';

describe('SignatureProcessingUnitComponent', () => {
  let component: SignatureProcessingUnitComponent;
  let fixture: ComponentFixture<SignatureProcessingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureProcessingUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureProcessingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
