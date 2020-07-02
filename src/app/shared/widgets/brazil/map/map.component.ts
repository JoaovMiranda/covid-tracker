declare var require: any;
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import MapModule from 'highcharts/modules/map';
import { AppService } from 'src/app/core/services/app.service';
const Brazil = require('@highcharts/map-collection/countries/br/br-all.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-map-brazil',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartOptions = {};
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
          this.arrAux.push(aux);
        } else if (status.uf.includes('MA')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('PA')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('SC')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('BA')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('AP')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('MS')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('MG')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('GO')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('RS')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('TO')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('PI')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('AL')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('PB')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('CE')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('SE')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('RR')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('PE')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('PR')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('ES')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('RJ')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('RN')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('AM')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('MT')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('DF')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('AC')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
        } else if (status.uf.includes('RO')) {
          let aux = 0;
          aux += status.cases;
          this.arrAux.push(aux);
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
        min: 0
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'CONFIRMADOS',
          states: {
            hover: {
              color: '#39ff14'
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
            ['br-sp', this.arrAux[0]],
            ['br-ma', this.arrAux[1]],
            ['br-pa', this.arrAux[2]],
            ['br-sc', this.arrAux[3]],
            ['br-ba', this.arrAux[4]],
            ['br-ap', this.arrAux[5]],
            ['br-ms', this.arrAux[6]],
            ['br-mg', this.arrAux[7]],
            ['br-go', this.arrAux[8]],
            ['br-rs', this.arrAux[9]],
            ['br-to', this.arrAux[10]],
            ['br-pi', this.arrAux[11]],
            ['br-al', this.arrAux[12]],
            ['br-pb', this.arrAux[13]],
            ['br-ce', this.arrAux[14]],
            ['br-se', this.arrAux[15]],
            ['br-rr', this.arrAux[16]],
            ['br-pe', this.arrAux[17]],
            ['br-pr', this.arrAux[18]],
            ['br-es', this.arrAux[19]],
            ['br-rj', this.arrAux[20]],
            ['br-rn', this.arrAux[21]],
            ['br-am', this.arrAux[22]],
            ['br-mt', this.arrAux[23]],
            ['br-df', this.arrAux[24]],
            ['br-ac', this.arrAux[25]],
            ['br-ro', this.arrAux[26]]
          ]
        }
      ]
    };
  }

}
