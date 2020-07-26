import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeComprehensiveHeadOfficeComponent } from './fee-comprehensive-head-office.component';

describe('FeeComprehensiveHeadOfficeComponent', () => {
  let component: FeeComprehensiveHeadOfficeComponent;
  let fixture: ComponentFixture<FeeComprehensiveHeadOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeComprehensiveHeadOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeComprehensiveHeadOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
