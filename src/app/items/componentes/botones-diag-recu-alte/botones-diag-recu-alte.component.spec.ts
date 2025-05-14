import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesDiagRecuAlteComponent } from './botones-diag-recu-alte.component';

describe('BotonesDiagRecuAlteComponent', () => {
  let component: BotonesDiagRecuAlteComponent;
  let fixture: ComponentFixture<BotonesDiagRecuAlteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesDiagRecuAlteComponent]
    });
    fixture = TestBed.createComponent(BotonesDiagRecuAlteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
