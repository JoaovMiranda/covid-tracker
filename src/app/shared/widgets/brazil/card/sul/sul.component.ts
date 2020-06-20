import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sul',
  templateUrl: './sul.component.html',
  styleUrls: ['./sul.component.scss']
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

        auxConfirmed += e[17].suspects;
        auxConfirmed += e[14].suspects;
        auxConfirmed += e[21].suspects;
        this.cabra.push(auxConfirmed);

        auxDeaths += e[17].deaths;
        auxDeaths += e[14].deaths;
        auxDeaths += e[21].deaths;
        this.cabra.push(auxDeaths);

        auxRecovered += e[17].refuses;
        auxRecovered += e[14].refuses;
        auxRecovered += e[21].refuses;
        this.cabra.push(auxRecovered);

        auxCases += e[17].cases;
        auxCases += e[14].cases;
        auxCases += e[21].cases;
        this.cabra.push(auxCases);
        // console.log(this.cabra);
        // console.log(e[17]);
        // console.log(e[14]);
        // console.log(e[21]);

        this.cabra.length === 4 ? this.setGraph() : console.log('seila');

      });
    });
  }

  setGraph() {
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
        data: [this.cabra[0]]

      }, {
        name: 'Mortos',
        data: [this.cabra[1]]

      }, {
        name: 'Recuperados',
        data: [this.cabra[2]]

      }, {
        name: 'Confirmados',
        data: [this.cabra[3]]

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
