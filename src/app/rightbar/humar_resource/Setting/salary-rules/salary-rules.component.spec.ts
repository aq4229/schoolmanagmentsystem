import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryRulesComponent } from './salary-rules.component';

describe('SalaryRulesComponent', () => {
  let component: SalaryRulesComponent;
  let fixture: ComponentFixture<SalaryRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
