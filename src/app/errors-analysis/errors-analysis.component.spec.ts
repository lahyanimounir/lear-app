import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsAnalysisComponent } from './errors-analysis.component';

describe('ErrorsAnalysisComponent', () => {
  let component: ErrorsAnalysisComponent;
  let fixture: ComponentFixture<ErrorsAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
