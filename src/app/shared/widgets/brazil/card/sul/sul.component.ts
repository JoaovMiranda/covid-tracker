import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sul',
  templateUrl: './sul.component.html',
  styleUrls: ['./sul.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SulComponent implements OnInit {

  cabra = [];
  Highcharts = Highcharts;
  chartOptions = {};

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getRecovered();
    this.setGraph();
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  getRecovered() {
    return this.appService.getStates().subscribe(res => {
      const AUX = Object.values(res);
      let auxCases = 0;
      let auxDeaths = 0;
      let auxConfirmed = 0;
      let auxRecovered = 0;
      AUX.map((e: any) => {
        // console.log(e)
        e.map(a => {
          switch (a.uid) {
            case 43:
              auxCases += a.cases;
              auxConfirmed += a.suspects;
              auxDeaths += a.deaths;
              auxRecovered += a.refuses;
              break;
            case 24:
              auxCases += a.cases;
              auxConfirmed += a.suspects;
              auxDeaths += a.deaths;
              auxRecovered += a.refuses;
              break;
            case 22:
              auxConfirmed += a.suspects;
              auxDeaths += a.deaths;
              auxRecovered += a.refuses;
              auxCases += a.cases;
              this.cabra.push(auxConfirmed);
              this.cabra.push(auxDeaths);
              this.cabra.push(auxRecovered);
              this.cabra.push(auxCases);
              this.setGraph();
              break;
          }
        }
        );
      });
    });
  }

  setGraph() {
    const data: any = {};
    data.suspeitas = this.cabra[0];
    data.mortos = this.cabra[1];
    data.recuperados = this.cabra[2];
    data.confirmados = this.cabra[3];

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Sul'
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
        name: 'Suspeitas',
        data: [data.suspeitas]

      }, {
        name: 'Mortos',
        data: [data.mortos]

      }, {
        name: 'Recuperados',
        data: [data.recuperados]

      }, {
        name: 'Confirmados',
        data: [data.confirmados]

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
