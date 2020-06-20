import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styleUrls: ['./table-countries.component.scss']
})
export class TableCountriesComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartOptions = {};

  constructor() {
  }

  ngOnInit() {
  }

}
