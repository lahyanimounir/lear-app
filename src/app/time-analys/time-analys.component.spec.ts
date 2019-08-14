import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAnalysComponent } from './time-analys.component';

describe('TimeAnalysComponent', () => {
  let component: TimeAnalysComponent;
  let fixture: ComponentFixture<TimeAnalysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAnalysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAnalysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
