import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeBankConciliationComponent } from './fee-bank-conciliation.component';

describe('FeeBankConciliationComponent', () => {
  let component: FeeBankConciliationComponent;
  let fixture: ComponentFixture<FeeBankConciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeBankConciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeBankConciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
