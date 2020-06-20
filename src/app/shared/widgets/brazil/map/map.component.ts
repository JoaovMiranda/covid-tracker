declare var require: any;
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import MapModule from 'highcharts/modules/map';
const Brazil = require('@highcharts/map-collection/countries/br/br-all.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        map: Brazil
      },
      title: {
        text: 'Highmaps basic demo'
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: 'spacingBox'
        }
      },
      colorAxis: {
        min: 0
      },
      series: [
        {
          name: 'Random data',
          states: {
            hover: {
              color: '#39ff14'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: false,
          data: [
            ['br-sp', 0],
            ['br-ma', 1],
            ['br-pa', 2],
            ['br-sc', 3],
            ['br-ba', 4],
            ['br-ap', 5],
            ['br-ms', 6],
            ['br-mg', 7],
            ['br-go', 8],
            ['br-rs', 9],
            ['br-to', 10],
            ['br-pi', 11],
            ['br-al', 12],
            ['br-pb', 13],
            ['br-ce', 14],
            ['br-se', 15],
            ['br-rr', 16],
            ['br-pe', 17],
            ['br-pr', 18],
            ['br-es', 19],
            ['br-rj', 20],
            ['br-rn', 21],
            ['br-am', 22],
            ['br-mt', 23],
            ['br-df', 24],
            ['br-ac', 25],
            ['br-ro', 26]
          ]
        }
      ]
    };
  }

}
