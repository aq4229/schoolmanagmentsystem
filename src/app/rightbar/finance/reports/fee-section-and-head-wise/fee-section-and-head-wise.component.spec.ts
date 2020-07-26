import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSectionAndHeadWiseComponent } from './fee-section-and-head-wise.component';

describe('FeeSectionAndHeadWiseComponent', () => {
  let component: FeeSectionAndHeadWiseComponent;
  let fixture: ComponentFixture<FeeSectionAndHeadWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSectionAndHeadWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSectionAndHeadWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
