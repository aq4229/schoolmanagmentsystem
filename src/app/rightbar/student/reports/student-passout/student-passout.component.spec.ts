import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPassoutComponent } from './student-passout.component';

describe('StudentPassoutComponent', () => {
  let component: StudentPassoutComponent;
  let fixture: ComponentFixture<StudentPassoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPassoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPassoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
