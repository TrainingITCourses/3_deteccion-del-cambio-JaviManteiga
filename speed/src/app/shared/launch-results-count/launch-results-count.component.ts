import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launch-results-count',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launch-results-count.component.html',
  styleUrls: ['./launch-results-count.component.css']
})
export class LaunchResultsCountComponent implements OnInit {

  @Input() public count: number;

  constructor() { }

  ngOnInit() {
  }

}
