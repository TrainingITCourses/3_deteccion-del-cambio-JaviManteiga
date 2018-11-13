import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../core/store/api.service';
import { from } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  public launches: any[];
  public filteredLaunches: any[] = [];
  public agencies: any[];
  public missionTypes: any[];
  public statusTypes: any[];
  public listToShow: any[];
  private filterType: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
    from(this.api.getAgencies()).subscribe(x => this.agencies = x);
    from(this.api.getMissionTypes()).subscribe(x => this.missionTypes = x);
    from(this.api.getStatusTypes()).subscribe(x => this.statusTypes = x);
  }

  onSearch = (searchParam: string) => {
    if (this.filterType === 'estado') {
      const filteredLaunches = this.api.launches.filter(
        l => l.status == searchParam
      );
      this.filteredLaunches = filteredLaunches;
    } else if (this.filterType === 'agencia') {
      const filteredLaunches = this.api.launches.filter(l =>
        (!isNullOrUndefined(l.rocket) && !isNullOrUndefined(l.rocket.agencies) && l.rocket.agencies.some(n => n.id == searchParam) ||
        l.missions.some(m => !isNullOrUndefined(m.agencies) && m.agencies.some(a => a.id == searchParam)) ||
        l.location.pads.some(p => !isNullOrUndefined(p.agencies) && p.agencies.some(a => a.id == searchParam)))
      );
      this.filteredLaunches = filteredLaunches;
    } else if (this.filterType === 'tipo') {
      const filteredLaunches = this.api.launches.filter(l =>
        l.missions.some(n => n.type == searchParam) ||
        (!isNullOrUndefined(l.lsp) && l.lsp.type == searchParam)
      );
      this.filteredLaunches = filteredLaunches;
    }
  }

  public onSelectFilterType($event: string) {
    this.filterType = $event;
    if ('estado' === $event) {
      this.listToShow = this.statusTypes;
    } else if ('agencia' === $event) {
      this.listToShow = this.agencies;
    } else if ('tipo' === $event) {
      this.listToShow = this.missionTypes;
    }
    this.filteredLaunches = [];

  }
}
