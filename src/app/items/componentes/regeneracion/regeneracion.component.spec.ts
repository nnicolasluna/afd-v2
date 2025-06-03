import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeneracionComponent } from './regeneracion.component';

describe('RegeneracionComponent', () => {
  let component: RegeneracionComponent;
  let fixture: ComponentFixture<RegeneracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegeneracionComponent]
    });
    fixture = TestBed.createComponent(RegeneracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
