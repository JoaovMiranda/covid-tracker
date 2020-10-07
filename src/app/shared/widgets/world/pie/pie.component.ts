import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';


@Component({
  selector: 'app-widget-pie-world',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  arrAux = [];

  Highcharts = Highcharts;

  chartOptions = {};

  isLoading = false;

  data: any = {};

  MORE = 0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setChart();
    this.getCasesTotal();

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  getCasesTotal() {
    this.isLoading = true;
    return this.appService.getContinents().subscribe(res => {
      let auxCases = 0;
      res.filter(status => {
        auxCases += status.cases;
      });
      this.arrAux.push(auxCases);
      this.getCasesCountry();
    });
  }

  getCasesCountry() {
    return this.appService.getCountries().subscribe(res => {
      res.filter(status => {
        if (status.country === 'USA') {
          let aux = 0;
          aux += status.cases;
          this.data.us = aux;
        } else if (status.country === 'Brazil') {
          let aux = 0;
          aux += status.cases;
          this.data.br = aux;
        } else if (status.country === 'Russia') {
          let aux = 0;
          aux += status.cases;
          this.data.ru = aux;
        } else if (status.country === 'India') {
          let aux = 0;
          aux += status.cases;
          this.data.in = aux;
        } else if (status.country === 'Colombia') {
          let aux = 0;
          aux += status.cases;
          this.data.pe = aux;
        }
      });
      this.setChart();
    });
  }

  setChart() {
    const auxData: any = {};
    this.MORE = this.data.pe + this.data.in + this.data.us + this.data.ru + this.data.br;
    auxData.total = this.arrAux[0] - this.MORE;
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: "Relação",
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      subtitle: {
        text: "Mais atingidos/Resto do mundo",
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      tooltip: {
        pointFormat: '<b>{point.y} - nº de casos</b>',
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              fontFamily: 'Roboto, Verdana, sans-serif'
            }
          }
        }
      },
      series: [{
        name: 'Mais afetados',
        colorByPoint: true,
        data: [
          ['Resto do mundo', auxData.total],
          ['Estados Unidos', this.data.us],
          ['India', this.data.in],
          ['Brasil', this.data.br],
          ['Russia', this.data.ru],
          ['Colômbia', this.data.pe],
        ],
        dataLabels: {
          style: {
            fontSize: '16px',
            fontFamily: 'Roboto, Verdana, sans-serif'
          }
        }
      }]
    };
    this.isLoading = false;
  }
}


