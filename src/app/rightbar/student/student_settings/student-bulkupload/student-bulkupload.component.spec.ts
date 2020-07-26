import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBulkuploadComponent } from './student-bulkupload.component';

describe('StudentBulkuploadComponent', () => {
  let component: StudentBulkuploadComponent;
  let fixture: ComponentFixture<StudentBulkuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBulkuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBulkuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
