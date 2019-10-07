import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualReportComponent } from './individual-report.component';

describe('IndividualReportComponent', () => {
  let component: IndividualReportComponent;
  let fixture: ComponentFixture<IndividualReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
