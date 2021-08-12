import { AllContries } from './../../../model/interfaces.model';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';
import { sumValuesArray } from 'src/app/shared/helpers/arrays.helper';
import { fontFamily } from 'src/app/shared/model/constants';
import { dispatchThisEvent } from 'src/app/shared/helpers/unusual.helper';


@Component({
  selector: 'app-widget-pie-world',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  isLoading = false;

  MORE = 0;
  totalCases = 0;

  dataToFill: (string | number)[][] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setChart()
    this.getCasesTotal();
    HC_exporting(Highcharts);
    dispatchThisEvent();
  }

  returnListCountries() {
    let contries = ''
    if (this.dataToFill) {
      this.dataToFill.forEach(
        (country, i) => {
          if (i > 0 && i !== 6) {
            contries += `${country[0]}, `
          } else if (i === 6) {
            contries += `${country[0]}`
          }
        }
      )
    }
    return contries;
  }

  returnPercentCountries(): number | string {
    if (this.dataToFill.length > 0) {
      let countries = (this.sumCases() * 100);
      let total = Number(this.dataToFill[0][1])
      return (countries / total).toFixed(2)
    }
    return 0;
  }

  private getCasesTotal(): void {
    this.isLoading = true;
    this.appService.getContinents().subscribe(
      res => {
        this.totalCases = sumValuesArray(res, 'cases')
        this.getCasesCountry();
      },
      err => {
        console.log(err)
      });
  }

  private getCasesCountry(): void {
    this.appService.getCountries().subscribe(
      res => {
        this.buildData(res);
        this.setChart();
      },
      err => {
        console.log(err)
      });
  }

  private buildData(res: AllContries[]): void {
    const sortByCases = res.sort((a, b) => b.cases - a.cases);
    this.dataToFill = [
      [sortByCases[0].country, sortByCases[0].cases],
      [sortByCases[1].country, sortByCases[1].cases],
      [sortByCases[2].country, sortByCases[2].cases],
      [sortByCases[3].country, sortByCases[3].cases],
      [sortByCases[4].country, sortByCases[4].cases],
    ]

    this.MORE = this.sumCases();

    this.dataToFill.unshift(['Resto do mundo', this.returnTotalCases()])
  }

  private sumCases = (): number => {
    if (this.dataToFill && this.dataToFill.length) {
      return Number(this.dataToFill[1][1]) + Number(this.dataToFill[2][1]) + Number(this.dataToFill[3][1]) + Number(this.dataToFill[4][1]);
    }
    return 0;
  }

  private returnTotalCases = (): number => {
    if (this.totalCases) {
      return this.totalCases - this.MORE
    }
    return 0;
  }

  private setChart(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Relação',
        style: {
          fontFamily: fontFamily
        }
      },
      subtitle: {
        text: 'Mais atingidos/Resto do mundo',
        style: {
          fontFamily: fontFamily
        }
      },
      tooltip: {
        pointFormat: '<b>{point.y} - nº de casos</b>',
        style: {
          fontFamily: fontFamily
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
              fontFamily: fontFamily
            }
          }
        }
      },
      series: [{
        name: 'Mais afetados',
        colorByPoint: true,
        data: this.dataToFill,
        dataLabels: {
          style: {
            fontSize: '16px',
            fontFamily: fontFamily
          }
        }
      }]
    };
    this.isLoading = false;
  }
}


