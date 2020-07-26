import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSummaryDetailsComponent } from './fee-summary-details.component';

describe('FeeSummaryDetailsComponent', () => {
  let component: FeeSummaryDetailsComponent;
  let fixture: ComponentFixture<FeeSummaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSummaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
