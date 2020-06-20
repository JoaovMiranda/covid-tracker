import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'https://covid19-brazil-api.now.sh';

  constructor(
    private http: HttpClient
  ) { }

  getStates() {
    return this.http.get(`${this.url}/api/report/v1`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

  getCountries() {
    return this.http.get(`${this.url}/api/report/v1/countries`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

  getCountry() {
    return this.http.get(`https://api.covid19api.com/countries`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }




}
