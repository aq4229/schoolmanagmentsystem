import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWithdrawalComponent } from './student-withdrawal.component';

describe('StudentWithdrawalComponent', () => {
  let component: StudentWithdrawalComponent;
  let fixture: ComponentFixture<StudentWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
