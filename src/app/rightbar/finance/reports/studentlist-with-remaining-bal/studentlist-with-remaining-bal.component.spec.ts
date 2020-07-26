import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistWithRemainingBalComponent } from './studentlist-with-remaining-bal.component';

describe('StudentlistWithRemainingBalComponent', () => {
  let component: StudentlistWithRemainingBalComponent;
  let fixture: ComponentFixture<StudentlistWithRemainingBalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlistWithRemainingBalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlistWithRemainingBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
