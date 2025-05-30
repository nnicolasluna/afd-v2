import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViwerComponent } from './pdf-viwer.component';

describe('PdfViwerComponent', () => {
  let component: PdfViwerComponent;
  let fixture: ComponentFixture<PdfViwerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfViwerComponent]
    });
    fixture = TestBed.createComponent(PdfViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
