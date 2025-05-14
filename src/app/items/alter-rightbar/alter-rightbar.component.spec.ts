import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterRightbarComponent } from './alter-rightbar.component';

describe('AlterRightbarComponent', () => {
  let component: AlterRightbarComponent;
  let fixture: ComponentFixture<AlterRightbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterRightbarComponent]
    });
    fixture = TestBed.createComponent(AlterRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
