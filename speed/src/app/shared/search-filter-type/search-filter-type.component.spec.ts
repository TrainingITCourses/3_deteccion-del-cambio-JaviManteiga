import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterTypeComponent } from './search-filter-type.component';

describe('SearchFilterTypeComponent', () => {
  let component: SearchFilterTypeComponent;
  let fixture: ComponentFixture<SearchFilterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
