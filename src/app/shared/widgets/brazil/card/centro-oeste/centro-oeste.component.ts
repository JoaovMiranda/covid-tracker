import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { dispatchThisEvent } from 'src/app/shared/helpers/unusual.helper';


@Component({
  selector: 'app-centro-oeste',
  templateUrl: './centro-oeste.component.html',
  styleUrls: ['./centro-oeste.component.scss']
})
export class CentroOesteComponent implements OnInit {

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
        if (status.uf === 'MT' || status.uf === 'MS' || status.uf === 'GO' || status.uf === 'DF') {
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
        text: 'Centro-Oeste'
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
