import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts';
import { AppService } from 'src/app/app.service';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-america-norte-card',
  templateUrl: './america-norte.component.html',
  styleUrls: ['./america-norte.component.scss']
})
export class AmericaNorteComponent implements OnInit {

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
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  getData = () => {
    return this.appService.getContinents().subscribe(res => {
      const AUX = Object.values(res);
      AUX.map((e: any) => {
        if (e.continent === 'North America') {
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
        text: 'América do Norte'
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
        name: 'Mortos',
        data: [data.deaths]

      }, {
        name: 'Recuperados',
        data: [data.recovered]

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
