import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';
import { dispatchThisEvent } from 'src/app/shared/helpers/unusual.helper';
import { fontFamily } from 'src/app/shared/model/constants';


@Component({
  selector: 'app-widget-pie-brazil',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieBrazilComponent implements OnInit {

  Highcharts = Highcharts;
  isLoading = false;

  chartOptions = {};
  arrCases = [];
  arrDeaths = [];

  arrCasesFirst = 0;
  arrDeathsFirst = 0;

  arrCasesSecond = 0;
  arrDeathsSecond = 0;

  arrCasesThird = 0;
  arrDeathsThird = 0;

  arrCasesFour = 0;
  arrDeathsFour = 0;

  arrCasesFive = 0;
  arrDeathsFive = 0;


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setChart();
    this.getData();
    HC_exporting(Highcharts);
    dispatchThisEvent();

  }

  getData() {
    this.isLoading = true;
    return this.appService.getStates().subscribe(res => {
      res.data.filter(status => {
        if (status.uf.includes('SP')) {
          this.arrCasesFirst += status.cases;
          this.arrDeathsFirst += status.deaths;
        } else if (status.uf.includes('RJ')) {
          this.arrCasesFour += status.cases;
          this.arrDeathsFour += status.deaths;
        } else if (status.uf.includes('CE')) {
          this.arrCasesFive += status.cases;
          this.arrDeathsFive += status.deaths;
        } else if (status.uf.includes('MG')) {
          this.arrCasesThird += status.cases;
          this.arrDeathsThird += status.deaths;
        } else if (status.uf.includes('BA')) {
          this.arrCasesSecond += status.cases;
          this.arrDeathsSecond += status.deaths;
        }
      });
      this.setChart();
    });
  }

  setChart() {
    const dataPrev = {
      2016: [
        ['São Paulo', this.arrCasesFirst],
        ['Rio de Janeiro', this.arrCasesFour],
        ['Ceará', this.arrCasesFive],
        ['Minas Gerais', this.arrCasesThird],
        ['Bahia', this.arrCasesSecond],
      ]
    };

    const data = {
      2016: [
        ['São Paulo', this.arrDeathsFirst],
        ['Rio de Janeiro', this.arrDeathsFour],
        ['Ceará', this.arrDeathsFive],
        ['Minas Gerais', this.arrDeathsThird],
        ['Bahia', this.arrDeathsSecond],
      ]
    };

    const countries = [{
      name: 'São Paulo',
      flag: 'SP',
      color: 'rgb(255, 255, 0)'
    }, {
      name: 'Rio de Janeiro',
      flag: 'RJ',
      color: 'rgb(255, 255, 0)'
    }, {
      name: 'Ceará',
      flag: 'CE',
      color: 'rgb(255, 255, 0)'
    }, {
      name: 'Minas Gerais',
      flag: 'MG',
      color: 'rgb(255, 255, 0)'
    }, {
      name: 'Bahia',
      flag: 'BA',
      color: 'rgb(255, 255, 0)'
    }];

    function getData(data) {
      return data.map(function (country, i) {
        return {
          name: country[0],
          y: country[1],
          color: countries[i].color
        };
      });
    }

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Mais atingidos',
        style: {
          fontFamily: fontFamily
        }
      },
      subtitle: {
        text: 'Relação confirmados/mortes',
        style: {
          fontFamily: fontFamily
        }
      },
      plotOptions: {
        series: {
          grouping: false,
          borderWidth: 0
        },
        style: {
          fontFamily: fontFamily
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      tooltip: {
        shared: true,
        headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
      },
      xAxis: {
        type: 'category',
        max: 4,
        labels: {
          useHTML: true,
          animate: true,
          formatter() {
            let value = this.value, output;
            countries.forEach(function (country) { if (country.name === value) { output = country.flag; } });
            return `<div style="font-size: 24px; display: flex; flex-direction: column; text-align: center;"><b>${output}</b><span><img alt="Bandeira do estado" src="https://raw.githubusercontent.com/devarthurribeiro/covid19-brazil-api/master/static/flags/${output}.png" style="width: 40px; height: 40px; border-radius: 8px"/></span></div>`;
          }
        }
      },
      yAxis: [{
        title: {
          text: 'Milhões',
          style: {
            fontFamily: fontFamily
          }
        },
        showFirstLabel: false
      }],
      series: [
        {
          color: 'rgb(43, 144, 143)',
          pointPlacement: -0.2,
          linkedTo: 'main',
          dataLabels: [{
            enabled: true,
            inside: true,
            style: {
              fontSize: '16px',
              fontFamily: fontFamily
            }
          }],
          data: dataPrev[2016].slice(),
          name: 'Confirmados',
          style: {
            fontFamily: fontFamily
          }
        },
        {
          name: 'Mortos',
          id: 'main',
          dataSorting: {
            enabled: true,
            matchByName: true
          },
          dataLabels: [{
            enabled: true,
            inside: true,
            style: {
              fontSize: '16px',
              fontFamily: fontFamily
            }
          }],
          data: getData(data[2016]).slice()
        }],
      exporting: {
        allowHTML: true
      }
    };
    this.isLoading = false;
  }
}


