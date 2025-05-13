import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDiagComponent } from './ver-diag.component';

describe('VerDiagComponent', () => {
  let component: VerDiagComponent;
  let fixture: ComponentFixture<VerDiagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerDiagComponent]
    });
    fixture = TestBed.createComponent(VerDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
