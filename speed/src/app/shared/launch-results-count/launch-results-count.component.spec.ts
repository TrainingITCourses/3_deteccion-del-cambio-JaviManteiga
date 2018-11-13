import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchResultsCountComponent } from './launch-results-count.component';

describe('LaunchResultsCountComponent', () => {
  let component: LaunchResultsCountComponent;
  let fixture: ComponentFixture<LaunchResultsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchResultsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchResultsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
