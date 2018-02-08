import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompaignsComponent } from './all-compaigns.component';

describe('AllCompaignsComponent', () => {
  let component: AllCompaignsComponent;
  let fixture: ComponentFixture<AllCompaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCompaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCompaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
