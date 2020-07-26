import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthSectionwiseComponent } from './strength-sectionwise.component';

describe('StrengthSectionwiseComponent', () => {
  let component: StrengthSectionwiseComponent;
  let fixture: ComponentFixture<StrengthSectionwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthSectionwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthSectionwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
