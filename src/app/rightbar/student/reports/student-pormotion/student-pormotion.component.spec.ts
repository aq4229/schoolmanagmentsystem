import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPormotionComponent } from './student-pormotion.component';

describe('StudentPormotionComponent', () => {
  let component: StudentPormotionComponent;
  let fixture: ComponentFixture<StudentPormotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPormotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPormotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
