import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-widget-area-world',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  arrAux = [];
  chartOptions: {};
  Highcharts = Highcharts;
  isLoading = false;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getCases();
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  // ATIVOS
  getCases() {
    this.isLoading = true;
    return this.appService.getContinents().subscribe(res => {
      let auxCases = 0;
      let auxDeaths = 0;
      let auxActive = 0;
      let auxRecovered = 0;
      let auxPopulation = 0;
      res.filter(status => {
        auxDeaths += status.deaths;
        auxCases += status.cases;
        auxActive += status.active;
        auxRecovered += status.recovered;
        auxPopulation += status.population;
      });
      const popPerc = (auxCases * 100) / auxPopulation;
      this.arrAux.push(auxCases);
      this.arrAux.push(auxDeaths);
      this.arrAux.push(auxActive);
      this.arrAux.push(auxRecovered);
      this.arrAux.push(auxPopulation);
      this.arrAux.push(popPerc);
      this.setChart();
    });
  }

  setChart() {
    const data: any = {};
    data.ativos = this.arrAux[2];
    data.mortos = this.arrAux[1];
    data.recuperados = this.arrAux[3];
    data.confirmados = this.arrAux[0];

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'MUNDO',
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      subtitle: {
        text: 'Casos',
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: 'Roboto, Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'População',
          style: {
            fontFamily: 'Roboto, Verdana, sans-serif'
          }
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
        pointFormat: '<b>{point.y}</b>',
        fontFamily: 'Roboto, Verdana, sans-serif'

      },
      series: [{
        name: 'População',
        data: [
          ['Confirmados', data.confirmados],
          ['Recuperados', data.recuperados],
          ['Mortos', data.mortos],
          ['Ativos', data.ativos],
        ],
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y}',
          y: 5,
          style: {
            fontSize: '14px',
            fontFamily: 'Roboto, Verdana, sans-serif'
          }
        }
      }]
    };
    this.isLoading = false;
  }
}
