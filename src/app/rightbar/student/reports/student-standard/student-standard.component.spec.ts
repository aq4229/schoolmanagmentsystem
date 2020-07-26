import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStandardComponent } from './student-standard.component';

describe('StudentStandardComponent', () => {
  let component: StudentStandardComponent;
  let fixture: ComponentFixture<StudentStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
