import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachRegisterComponent } from './serach-register.component';

describe('SerachRegisterComponent', () => {
  let component: SerachRegisterComponent;
  let fixture: ComponentFixture<SerachRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
