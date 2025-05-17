import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesEvaluamosComponent } from './botones-evaluamos.component';

describe('BotonesEvaluamosComponent', () => {
  let component: BotonesEvaluamosComponent;
  let fixture: ComponentFixture<BotonesEvaluamosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesEvaluamosComponent]
    });
    fixture = TestBed.createComponent(BotonesEvaluamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
