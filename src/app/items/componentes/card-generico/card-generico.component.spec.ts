import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenericoComponent } from './card-generico.component';

describe('CardGenericoComponent', () => {
  let component: CardGenericoComponent;
  let fixture: ComponentFixture<CardGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGenericoComponent]
    });
    fixture = TestBed.createComponent(CardGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
