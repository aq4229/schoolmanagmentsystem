import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCollectionUserComponent } from './fee-collection-user.component';

describe('FeeCollectionUserComponent', () => {
  let component: FeeCollectionUserComponent;
  let fixture: ComponentFixture<FeeCollectionUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeCollectionUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCollectionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
