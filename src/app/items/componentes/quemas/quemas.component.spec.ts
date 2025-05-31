import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemasComponent } from './quemas.component';

describe('QuemasComponent', () => {
  let component: QuemasComponent;
  let fixture: ComponentFixture<QuemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuemasComponent]
    });
    fixture = TestBed.createComponent(QuemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
