import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusSettingsComponent } from './campus-settings.component';

describe('CampusSettingsComponent', () => {
  let component: CampusSettingsComponent;
  let fixture: ComponentFixture<CampusSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
