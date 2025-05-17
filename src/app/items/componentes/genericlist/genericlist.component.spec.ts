import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericlistComponent } from './genericlist.component';

describe('GenericlistComponent', () => {
  let component: GenericlistComponent;
  let fixture: ComponentFixture<GenericlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericlistComponent]
    });
    fixture = TestBed.createComponent(GenericlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
