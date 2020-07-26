import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOperationComponent } from './student-operation.component';

describe('StudentOperationComponent', () => {
  let component: StudentOperationComponent;
  let fixture: ComponentFixture<StudentOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
