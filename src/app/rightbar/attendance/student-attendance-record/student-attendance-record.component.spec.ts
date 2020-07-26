import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttendanceRecordComponent } from './student-attendance-record.component';

describe('StudentAttendanceRecordComponent', () => {
  let component: StudentAttendanceRecordComponent;
  let fixture: ComponentFixture<StudentAttendanceRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAttendanceRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAttendanceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
