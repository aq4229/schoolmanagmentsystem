import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthInoutComponent } from './strength-inout.component';

describe('StrengthInoutComponent', () => {
  let component: StrengthInoutComponent;
  let fixture: ComponentFixture<StrengthInoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthInoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthInoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
