import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormerComponent } from './student-former.component';

describe('StudentFormerComponent', () => {
  let component: StudentFormerComponent;
  let fixture: ComponentFixture<StudentFormerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFormerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
