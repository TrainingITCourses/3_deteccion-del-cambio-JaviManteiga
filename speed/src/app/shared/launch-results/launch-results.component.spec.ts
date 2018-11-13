import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchResultsComponent } from './launch-results.component';

describe('LaunchResultsComponent', () => {
  let component: LaunchResultsComponent;
  let fixture: ComponentFixture<LaunchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
