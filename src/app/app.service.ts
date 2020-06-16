import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'https://covid19-brazil-api.now.sh/api/report/v1';
  // urll = 'https://covid19-brazil-api.now.sh/api/report/v1/countries';


  constructor(
    private http: HttpClient
  ) { }

  listar() {
    return this.http.get(`${this.url}`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

  searchByContry() {
    return this.http.get(`${this.url}/countries`)
      .pipe(timeout(10000),
        tap((result: any) => result),
        take(1));
  }

}
