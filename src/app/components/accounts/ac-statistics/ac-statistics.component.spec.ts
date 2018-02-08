import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcStatisticsComponent } from './ac-statistics.component';

describe('AcStatisticsComponent', () => {
  let component: AcStatisticsComponent;
  let fixture: ComponentFixture<AcStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
