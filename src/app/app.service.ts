import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  urlBrazil = 'https://covid19-brazil-api.now.sh';
  urlWorld = 'https://disease.sh';

  flagStatesBrazil = 'https://github.com/devarthurribeiro/covid19-brazil-api/tree/master/static/flags'

  constructor(
    private http: HttpClient
  ) { }

  getStates() {
    return this.http.get(`${this.urlBrazil}/api/report/v1`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

  getCountries() {
    return this.http.get(`${this.urlWorld}/v2/countries`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

  getCountriesByName(country) {
    return this.http.get(`${this.urlWorld}/v2/countries/${country}`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

  getCountriesByNameFlag(country) {
    return this.http.get(country, { responseType: 'blob' })
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

  getContinents() {
    return this.http.get(`${this.urlWorld}/v2/continents`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }
}
