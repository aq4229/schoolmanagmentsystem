import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsLeadgerComponent } from './heads-leadger.component';

describe('HeadsLeadgerComponent', () => {
  let component: HeadsLeadgerComponent;
  let fixture: ComponentFixture<HeadsLeadgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsLeadgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsLeadgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
