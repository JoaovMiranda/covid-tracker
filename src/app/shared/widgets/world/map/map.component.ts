declare var require: any;
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import MapModule from 'highcharts/modules/map';
import { AppService } from 'src/app/core/services/app.service';
const World = require('@highcharts/map-collection/custom/world-continents.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-map-world',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapWorldComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartOptions = {};

  northAmerica = 0;
  southAmerica = 0;
  europe = 0;
  asia = 0;
  africa = 0;
  oceania = 0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
    this.setChart();

  }

  getData = () => {
    return this.appService.getContinents().subscribe(res => {
      const AUX = Object.values(res);
      AUX.map((e: any) => {
        e.continent === 'North America' ? this.northAmerica += e.cases : null;
        e.continent === 'South America' ? this.southAmerica += e.cases : null;
        e.continent === 'Europe' ? this.europe += e.cases : null;
        e.continent === 'Asia' ? this.asia += e.cases : null;
        e.continent === 'Africa' ? this.africa += e.cases : null;
        e.continent === 'Australia/Oceania' ? this.oceania += e.cases : null;
        this.setChart();
      });
    });
  }

  setChart() {
    const data = [
      ['eu', this.europe],
      ['oc', this.oceania],
      ['af', this.africa],
      ['as', this.asia],
      ['na', this.northAmerica],
      ['sa', this.southAmerica]
    ];

    this.chartOptions = {
      chart: {
        map: World
      },
      title: {
        text: 'Continentes'
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
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Casos confirmados',
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
          data
        }
      ]
    };
  }

}
