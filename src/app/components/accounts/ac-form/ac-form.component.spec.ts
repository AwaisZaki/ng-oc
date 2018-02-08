import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFormComponent } from './ac-form.component';

describe('AcFormComponent', () => {
  let component: AcFormComponent;
  let fixture: ComponentFixture<AcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
