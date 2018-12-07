import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

// 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000'
// environment.url + '/assets/launchlibrary.json'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public launches: any[];
  public statuses: any[];
  private key = 'launches';
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const launches = localStorage.getItem(this.key);
      if (launches) {
        this.launches = JSON.parse(launches);
      } else {
        this.loadLaunches();
      }
    }
  }

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

  private loadLaunches = (): void => {
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(
        map((res: any) => res.launches),
      ).subscribe(res => {
        this.launches = res;
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem(this.key, JSON.stringify(this.launches));
        }
      }
      );
  };
}
