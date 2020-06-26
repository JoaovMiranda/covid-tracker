import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AppService } from 'src/app/app.service';
import HC_exporting from 'highcharts/modules/exporting';

import theme from 'highcharts/themes/dark-unica';

theme(Highcharts);

@Component({
  selector: 'app-nordeste',
  templateUrl: './nordeste.component.html',
  styleUrls: ['./nordeste.component.scss']
})
export class NordesteComponent implements OnInit {

  data = [];
  Highcharts = Highcharts;
  chartOptions = {};

  auxCases = 0;
  auxDeaths = 0;
  auxSuspects = 0;
  auxRefuses = 0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // this.getData();
    // this.setChart();
    // setOptions(teset);
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  getData() {
    this.appService.getStates().subscribe(res => {
      // debugger
      const norte = res.data.filter(state => {
        if (
          state.uf === 'AC' ||
          state.uf === 'AP' ||
          state.uf === 'AM' ||
          state.uf === 'PA' ||
          state.uf === 'RO' ||
          state.uf === 'RR' ||
          state.uf === 'TO'
        ) {
          // for (let index = 0; index < 8; index++) {
          this.auxDeaths += state.deaths;
          this.auxCases += state.cases;
          this.auxSuspects += state.suspects;
          this.auxRefuses += state.refuses;
          // }
        } else {
          console.log('a');
        }
        console.log(this.auxDeaths);

        this.teste(this.auxDeaths);

        // return state;
      });
    });

  }

  teste(event) {
    // for (let i = 7; counter < i; console.log(i)) {
    // console.log(event);

    // this.auxDeaths += event.deaths;

    // this.auxCases += event.cases;
    // this.auxSuspects += event.suspects;
    // this.auxRefuses += event.refuses;
    // }

    // console.log(this.auxDeaths);

    // console.log(this.auxDeaths);
    // console.log(AUX);
    // console.log(event.length);
    // event.reduce((x, y) => {
    //   return {
    //     deaths: x.deaths + y.deaths, //mortes
    //     cases: x.cases + y.cases, //casos confirmados
    //     datetime: x.datetime,
    //   };
    // }

    // );
  }


  setChart() {
    // console.log(this.cabra)

    this.chartOptions = {
      chart: {
        type: 'column',
        inverted: true,
        // polar: true
      },
      title: {
        text: ' .'
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
        data: [this.data[0]]

      }, {
        name: 'Mortos',
        data: [this.data[1]]

      }, {
        name: 'Recuperados',
        data: [this.data[2]]

      }, {
        name: 'Confirmados',
        data: [this.data[3]]

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
