declare var require: any;
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import MapModule from 'highcharts/modules/map';
import { AppService } from 'src/app/core/services/app.service';
const Brazil = require('@highcharts/map-collection/countries/br/br-all.geo.json');
MapModule(Highcharts);
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);


@Component({
  selector: 'app-map-brazil',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartOptions = {};
  data: any = {};

  arrAux = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setChart();
    this.getData();
  }

  getData() {
    return this.appService.getStates().subscribe(res => {
      res.data.filter(status => {
        if (status.uf.includes('SP')) {
          let aux = 0;
          aux += status.cases;
          this.data.sp = aux;
        } else if (status.uf.includes('MA')) {
          let aux = 0;
          aux += status.cases;
          this.data.ma = aux;
        } else if (status.uf.includes('PA')) {
          let aux = 0;
          aux += status.cases;
          this.data.pa = aux;
        } else if (status.uf.includes('SC')) {
          let aux = 0;
          aux += status.cases;
          this.data.sc = aux;
        } else if (status.uf.includes('BA')) {
          let aux = 0;
          aux += status.cases;
          this.data.ba = aux;
        } else if (status.uf.includes('AP')) {
          let aux = 0;
          aux += status.cases;
          this.data.ap = aux;
        } else if (status.uf.includes('MS')) {
          let aux = 0;
          aux += status.cases;
          this.data.ms = aux;
        } else if (status.uf.includes('MG')) {
          let aux = 0;
          aux += status.cases;
          this.data.mg = aux;
        } else if (status.uf.includes('GO')) {
          let aux = 0;
          aux += status.cases;
          this.data.go = aux;
        } else if (status.uf.includes('RS')) {
          let aux = 0;
          aux += status.cases;
          this.data.rs = aux;
        } else if (status.uf.includes('TO')) {
          let aux = 0;
          aux += status.cases;
          this.data.to = aux;
        } else if (status.uf.includes('PI')) {
          let aux = 0;
          aux += status.cases;
          this.data.pi = aux;
        } else if (status.uf.includes('AL')) {
          let aux = 0;
          aux += status.cases;
          this.data.al = aux;
        } else if (status.uf.includes('PB')) {
          let aux = 0;
          aux += status.cases;
          this.data.pb = aux;
        } else if (status.uf.includes('CE')) {
          let aux = 0;
          aux += status.cases;
          this.data.ce = aux;
        } else if (status.uf.includes('SE')) {
          let aux = 0;
          aux += status.cases;
          this.data.se = aux;
        } else if (status.uf.includes('RR')) {
          let aux = 0;
          aux += status.cases;
          this.data.rr = aux;
        } else if (status.uf.includes('PE')) {
          let aux = 0;
          aux += status.cases;
          this.data.pe = aux;
        } else if (status.uf.includes('PR')) {
          let aux = 0;
          aux += status.cases;
          this.data.pr = aux;
        } else if (status.uf.includes('ES')) {
          let aux = 0;
          aux += status.cases;
          this.data.es = aux;
        } else if (status.uf.includes('RJ')) {
          let aux = 0;
          aux += status.cases;
          this.data.rj = aux;
        } else if (status.uf.includes('RN')) {
          let aux = 0;
          aux += status.cases;
          this.data.rn = aux;
        } else if (status.uf.includes('AM')) {
          let aux = 0;
          aux += status.cases;
          this.data.am = aux;
        } else if (status.uf.includes('MT')) {
          let aux = 0;
          aux += status.cases;
          this.data.mt = aux;
        } else if (status.uf.includes('DF')) {
          let aux = 0;
          aux += status.cases;
          this.data.df = aux;
        } else if (status.uf.includes('AC')) {
          let aux = 0;
          aux += status.cases;
          this.data.ac = aux;
        } else if (status.uf.includes('RO')) {
          let aux = 0;
          aux += status.cases;
          this.data.ro = aux;
        }
      });
      this.setChart();
    });
  }

  setChart() {
    this.chartOptions = {
      chart: {
        map: Brazil
      },
      title: {
        text: 'Brasil',
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: 'spacingBox'
        }
      },
      colorAxis: {
        min: 0,
        stops: [
          [0, '#FFF'],
          // [0.5, '#FFF'],
          [1, '#2b908f']
        ]
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'CONFIRMADOS',
          states: {
            hover: {
              color: '#CF6679'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
              fontFamily: 'Roboto, Verdana, sans-serif'
            }
          },
          allAreas: false,
          data: [
            ['br-sp', this.data.sp],
            ['br-ma', this.data.ma],
            ['br-pa', this.data.pa],
            ['br-sc', this.data.sc],
            ['br-ba', this.data.ba],
            ['br-ap', this.data.ap],
            ['br-ms', this.data.ms],
            ['br-mg', this.data.mg],
            ['br-go', this.data.go],
            ['br-rs', this.data.rs],
            ['br-to', this.data.to],
            ['br-pi', this.data.pi],
            ['br-al', this.data.al],
            ['br-pb', this.data.pb],
            ['br-ce', this.data.ce],
            ['br-se', this.data.se],
            ['br-rr', this.data.rr],
            ['br-pe', this.data.pe],
            ['br-pr', this.data.pr],
            ['br-es', this.data.es],
            ['br-rj', this.data.rj],
            ['br-rn', this.data.rn],
            ['br-am', this.data.am],
            ['br-mt', this.data.mt],
            ['br-df', this.data.df],
            ['br-ac', this.data.ac],
            ['br-ro', this.data.ro]
          ]
        }
      ]
    };
  }

}
