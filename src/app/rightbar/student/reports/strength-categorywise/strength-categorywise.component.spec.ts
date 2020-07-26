import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthCategorywiseComponent } from './strength-categorywise.component';

describe('StrengthCategorywiseComponent', () => {
  let component: StrengthCategorywiseComponent;
  let fixture: ComponentFixture<StrengthCategorywiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthCategorywiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthCategorywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
