import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { AppService } from 'src/app/core/services/app.service';
import { dispatchThisEvent } from 'src/app/shared/helpers/unusual.helper';

@Component({
  selector: 'app-norte',
  templateUrl: './norte.component.html',
  styleUrls: ['./norte.component.scss']
})
export class NorteComponent implements OnInit {

  arrAux = [];
  Highcharts = Highcharts;
  chartOptions = {};

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
    this.setChart();
    HC_exporting(Highcharts);
    dispatchThisEvent();
  }

  getData() {
    return this.appService.getStates().subscribe(res => {
      let auxCases = 0;
      let auxDeaths = 0;
      let auxSuspects = 0;
      res.data.filter(status => {
        if (status.uf === 'AC' ||
          status.uf === 'AP' ||
          status.uf === 'AM' ||
          status.uf === 'PA' ||
          status.uf === 'RO' ||
          status.uf === 'RR' ||
          status.uf === 'TO' 
          ) {
          auxDeaths += status.deaths;
          auxCases += status.cases;
          auxSuspects += status.suspects;
        }
      }); 

      this.arrAux.push(auxCases);
      this.arrAux.push(auxDeaths);
      this.arrAux.push(auxSuspects);
      this.setChart();
    });
  }

  setChart() {
    const data: any = {};
    data.confirmados = this.arrAux[0];
    data.mortos = this.arrAux[1];
    data.suspeitos = this.arrAux[2];

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Norte'
      },
      xAxis: {
        categories: [
          '2020'
        ],
        crosshair: true
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      legend: {
        reversed: true
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px"></span><table style="width: 130px">',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0; text-align: right;"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Confirmados',
        data: [data.confirmados]

      }, {
        name: 'Suspeitos',
        data: [data.suspeitos]

      }, {
        name: 'Mortos',
        data: [data.mortos]

      }], responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    };
  }
}
