import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthGenderwiseComponent } from './strength-genderwise.component';

describe('StrengthGenderwiseComponent', () => {
  let component: StrengthGenderwiseComponent;
  let fixture: ComponentFixture<StrengthGenderwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthGenderwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthGenderwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
