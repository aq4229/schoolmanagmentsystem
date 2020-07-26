import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeComprehensiveSectionInchangeComponent } from './fee-comprehensive-section-inchange.component';

describe('FeeComprehensiveSectionInchangeComponent', () => {
  let component: FeeComprehensiveSectionInchangeComponent;
  let fixture: ComponentFixture<FeeComprehensiveSectionInchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeComprehensiveSectionInchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeComprehensiveSectionInchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
