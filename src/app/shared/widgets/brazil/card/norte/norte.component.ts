import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-norte',
  templateUrl: './norte.component.html',
  styleUrls: ['./norte.component.scss']
})
export class NorteComponent implements OnInit {

  cabra = [];
  Highcharts = Highcharts;
  chartOptions = {};

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
    this.setChart();
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  getData() {
    return this.appService.getStates().subscribe(res => {
      const AUX = Object.values(res);
      let auxCases = 0;
      let auxDeaths = 0;
      let auxConfirmed = 0;
      let auxRecovered = 0;
      AUX.map((e: any) => {
        auxConfirmed += e[4].suspects;
        auxConfirmed += e[20].suspects;
        auxConfirmed += e[2].suspects;
        auxConfirmed += e[16].suspects;
        auxConfirmed += e[8].suspects;
        auxConfirmed += e[6].suspects;
        auxConfirmed += e[11].suspects;
        auxConfirmed += e[15].suspects;
        auxConfirmed += e[7].suspects;
        this.cabra.push(auxConfirmed);

        auxDeaths += e[4].deaths;
        auxDeaths += e[20].deaths;
        auxDeaths += e[2].deaths;
        auxDeaths += e[16].deaths;
        auxDeaths += e[8].deaths;
        auxDeaths += e[6].deaths;
        auxDeaths += e[11].deaths;
        auxDeaths += e[15].deaths;
        auxDeaths += e[7].deaths;
        this.cabra.push(auxDeaths);

        auxRecovered += e[4].refuses;
        auxRecovered += e[20].refuses;
        auxRecovered += e[2].refuses;
        auxRecovered += e[16].refuses;
        auxRecovered += e[8].refuses;
        auxRecovered += e[6].refuses;
        auxRecovered += e[11].refuses;
        auxRecovered += e[15].refuses;
        auxRecovered += e[7].refuses;
        this.cabra.push(auxRecovered);

        auxCases += e[4].cases;
        auxCases += e[20].cases;
        auxCases += e[2].cases;
        auxCases += e[16].cases;
        auxCases += e[8].cases;
        auxCases += e[6].cases;
        auxCases += e[11].cases;
        auxCases += e[15].cases;
        auxCases += e[7].cases;
        this.cabra.push(auxCases);
        // this.setChart();
      });
    });
  }


  setChart() {
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
      yAxis: {
        title: {
          text: 'Pessoas'
        }
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
        headerFormat: '<span style="font-size:10px"></span><table style="width: 120px">',
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
