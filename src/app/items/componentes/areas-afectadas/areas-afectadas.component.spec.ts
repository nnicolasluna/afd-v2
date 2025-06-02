import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasAfectadasComponent } from './areas-afectadas.component';

describe('AreasAfectadasComponent', () => {
  let component: AreasAfectadasComponent;
  let fixture: ComponentFixture<AreasAfectadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasAfectadasComponent]
    });
    fixture = TestBed.createComponent(AreasAfectadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
