import { Component, OnInit, Input, Pipe } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-widget-area-brazil',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaBrazilComponent implements OnInit {

  arrAux = [];
  population = 0;
  chartOptions: {};
  chartOptionns: {};
  isLoading = false;

  Highcharts: typeof Highcharts = Highcharts;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  getData() {
    this.isLoading = true;
    return this.appService.getStates().subscribe(res => {
      let auxCases = 0;
      let auxDeaths = 0;
      let auxSuspects = 0;
      res.data.filter(status => {
        auxDeaths += status.deaths;
        auxCases += status.cases;
        auxSuspects += status.suspects;
      });
      this.arrAux.push(auxCases);
      this.arrAux.push(auxDeaths);
      this.arrAux.push(auxSuspects);
      this.getPopulation();
    });
  }

  getPopulation() {
    return this.appService.getCountries().subscribe(res => {
      let auxPopulation = 0;
      res.filter(status => {
        if (status.country.includes('Brazil')) {
          auxPopulation += status.population;
          this.arrAux.push(auxPopulation);
        }
      });
      const popPerc = (this.arrAux[0] * 100) / auxPopulation;
      this.arrAux.push(popPerc);
      this.setChart();
    });
  }

  setChart() {
    const data = [
      ['Confirmados', this.arrAux[0]],
      ['Mortos', this.arrAux[1]],
      ['Suspeitas', this.arrAux[2]]
    ];

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Brasil'
      },
      subtitle: {
        text: 'Casos'
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'População'
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b>'
      },
      series: [{
        name: 'População',
        data,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y}',
          y: 5,
          style: {
            fontSize: '14px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    };

    this.chartOptionns = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Relação'
      },
      subtitle: {
        text: 'Casos/População Brasileira'
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
          ['População', 212537568],
          ['Confirmados', this.arrAux[0]],
        ], dataLabels: {
          style: {
            fontSize: '16px',
            fontFamily: 'Roboto Regular, Verdana, sans-serif'
          }
        }
      }]
    };

    this.isLoading = false;

  }
}
