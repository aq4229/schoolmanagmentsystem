import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReadmissionComponent } from './student-readmission.component';

describe('StudentReadmissionComponent', () => {
  let component: StudentReadmissionComponent;
  let fixture: ComponentFixture<StudentReadmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReadmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
