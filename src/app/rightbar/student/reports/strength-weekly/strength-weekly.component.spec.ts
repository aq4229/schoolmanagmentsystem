import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthWeeklyComponent } from './strength-weekly.component';

describe('StrengthWeeklyComponent', () => {
  let component: StrengthWeeklyComponent;
  let fixture: ComponentFixture<StrengthWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
