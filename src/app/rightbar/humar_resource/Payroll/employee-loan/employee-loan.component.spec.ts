import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoanComponent } from './employee-loan.component';

describe('EmployeeLoanComponent', () => {
  let component: EmployeeLoanComponent;
  let fixture: ComponentFixture<EmployeeLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
