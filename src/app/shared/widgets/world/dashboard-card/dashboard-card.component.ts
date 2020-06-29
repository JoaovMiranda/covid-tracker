import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardCardComponent implements OnInit {

  countries: any;
  country: any;
  flag: any;

  imageToShow: any;
  isImageLoading: boolean;

  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;

  continent: string;
  sigla: string;
  sigla2: string;
  lat: number;
  long: number;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData = () => this.appService.getCountries().subscribe(res => { this.countries = res; });

  getCountry = (country: any) => this.country = country;

  getCoronaData() {
    return this.appService.getCountriesByName(this.country).subscribe(res => {
      console.log(res);
      this.cases = res.cases;
      this.todayCases = res.todayCases;
      this.deaths = res.deaths;
      this.todayDeaths = res.todayDeaths;
      this.recovered = res.recovered;
      this.todayRecovered = res.todayRecovered;
      this.active = res.active;
      this.critical = res.critical;
      this.casesPerOneMillion = res.casesPerOneMillion;
      this.deathsPerOneMillion = res.deathsPerOneMillion;
      this.tests = res.tests;
      this.testsPerOneMillion = res.testsPerOneMillion;
      this.population = res.population;
      this.flag = res.countryInfo.flag;
      this.continent = res.continent;
      this.sigla = res.countryInfo.iso2;
      this.sigla2 = res.countryInfo.iso3;
      this.lat = res.countryInfo.lat;
      this.long = res.countryInfo.long;
      this.getImageFromService();
    });

  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.appService.getCountriesByNameFlag(this.flag).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }


}
