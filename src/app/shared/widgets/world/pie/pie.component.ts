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
      let auxCases = 0;
      res.filter(status => {
        if (status.country === 'USA' ||
          status.country === 'Brazil' ||
          status.country === 'Russia' ||
          status.country === 'India' ||
          status.country === 'UK') {
          auxCases += status.cases;
        }
      });
      this.arrAux.push(auxCases);
      this.setChart();
    });
  }

  setChart() {
    const data: any = {};
    data.total = this.arrAux[0] - this.arrAux[1];
    data.more = this.arrAux[1];
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
        pointFormat: '<b>{point.percentage:.1f}%</b>',
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
        data: [['Resto do mundo', data.total], ['5 países mais afetados', data.more]],
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


