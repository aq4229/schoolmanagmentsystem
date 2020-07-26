import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCollectionSchoolComponent } from './fee-collection-school.component';

describe('FeeCollectionSchoolComponent', () => {
  let component: FeeCollectionSchoolComponent;
  let fixture: ComponentFixture<FeeCollectionSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeCollectionSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCollectionSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
