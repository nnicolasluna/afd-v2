import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluamosComponent } from './evaluamos.component';

describe('EvaluamosComponent', () => {
  let component: EvaluamosComponent;
  let fixture: ComponentFixture<EvaluamosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluamosComponent]
    });
    fixture = TestBed.createComponent(EvaluamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
