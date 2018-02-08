import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMyAccountComponent } from './ad-my-account.component';

describe('AdMyAccountComponent', () => {
  let component: AdMyAccountComponent;
  let fixture: ComponentFixture<AdMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
