import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000'
// environment.url + '/assets/launchlibrary.json'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public launches: any[];
  public statuses: any[];
  private key = 'launches';
  constructor(private http: HttpClient) {
    const launches = localStorage.getItem(this.key);
    if (launches) {
      this.launches = JSON.parse(launches);
    }
  }

  public getLaunches = (): Observable<any[]> => {
    return this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(
        map((res: any) => res.launches),
        tap(res => (this.launches = res)),
        tap(res =>
          localStorage.setItem(this.key, JSON.stringify(this.launches))
        )
      );
  };

  public getAgencies = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies));

  public getMissionTypes = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types));

  public getStatusTypes = (): Observable<any[]> =>
    this.http.get(environment.url + '/assets/data/launchstatus.json').pipe(
      map((res: any) => res.types),
      map((res: any[]) => res.map(this.setStatusColor)),
      tap((res: any[]) => (this.statuses = res))
    );

  private setStatusColor = statusType => {
    switch (statusType.id) {
      case 1:
      case 3:
      case 6:
        statusType.color = 'accent';
        break;
      case 2:
      case 4:
      case 5:
      case 7:
        statusType.class = 'warn';
        break;
      default:
        break;
    }
    return statusType;
  };
}
