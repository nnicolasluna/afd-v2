import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocosdeCalorComponent } from './focosde-calor.component';

describe('FocosdeCalorComponent', () => {
  let component: FocosdeCalorComponent;
  let fixture: ComponentFixture<FocosdeCalorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocosdeCalorComponent]
    });
    fixture = TestBed.createComponent(FocosdeCalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
