import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmissionsComponent } from './student-admissions.component';

describe('StudentAdmissionsComponent', () => {
  let component: StudentAdmissionsComponent;
  let fixture: ComponentFixture<StudentAdmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAdmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
