import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeComprehensiveCampusComponent } from './fee-comprehensive-campus.component';

describe('FeeComprehensiveCampusComponent', () => {
  let component: FeeComprehensiveCampusComponent;
  let fixture: ComponentFixture<FeeComprehensiveCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeComprehensiveCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeComprehensiveCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
