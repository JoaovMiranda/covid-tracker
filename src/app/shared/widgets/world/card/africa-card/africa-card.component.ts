import { Component, OnInit, Input } from '@angular/core';
import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';
import { dispatchThisEvent } from 'src/app/shared/helpers/unusual.helper';

@Component({
  selector: 'app-africa-card',
  templateUrl: './africa-card.component.html',
  styleUrls: ['./africa-card.component.scss']
})
export class AfricaCardComponent implements OnInit {

  cases = 0;
  deaths = 0;
  recovered = 0;
  active = 0;
  population = 0;

  Highcharts = Highcharts;
  chartOptions = {};

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
    this.setChart();
    HC_exporting(Highcharts);
    dispatchThisEvent();

  }

  getData = () => {
    return this.appService.getContinents().subscribe(res => {
      const AUX = Object.values(res);
      AUX.map((e: any) => {
        if (e.continent === 'Africa') {
          this.cases += e.cases;
          this.deaths += e.deaths;
          this.recovered += e.recovered;
          this.active += e.active;
          this.population += e.population;
          this.setChart();
        }
      });
    });
  }

  setChart() {
    const data: any = {};

    data.cases = this.cases;
    data.deaths = this.deaths;
    data.recovered = this.recovered;
    data.active = this.active;
    data.population = this.population;

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'África'
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
        name: 'Ativos',
        data: [data.active]

      }, {
        name: 'Recuperados',
        data: [data.recovered]

      }, {
        name: 'Mortos',
        data: [data.deaths]

      }, {
        name: 'Confirmados',
        data: [data.cases]

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
