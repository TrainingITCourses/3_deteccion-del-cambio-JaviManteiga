import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launch-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launch-results.component.html',
  styleUrls: ['./launch-results.component.css']
})
export class LaunchResultsComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
