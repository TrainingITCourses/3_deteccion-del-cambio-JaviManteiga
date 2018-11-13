import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-filter-type',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-filter-type.component.html',
  styleUrls: ['./search-filter-type.component.css']
})
export class SearchFilterTypeComponent implements OnInit {

  @Output() public selectFilterType = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
