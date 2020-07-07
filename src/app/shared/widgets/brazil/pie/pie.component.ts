import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';


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


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setChart();
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
      res.data.filter(status => {
        if (status.uf.includes('SP')) {
          let aux = 0;
          let auxDeaths = 0;
          aux += status.cases;
          auxDeaths += status.deaths;
          this.arrCases.push(aux);
          this.arrDeaths.push(auxDeaths);
        } else if (status.uf.includes('RJ')) {
          let aux = 0;
          let auxDeaths = 0;
          aux += status.cases;
          auxDeaths += status.deaths;
          this.arrCases.push(aux);
          this.arrDeaths.push(auxDeaths);
        } else if (status.uf.includes('CE')) {
          let aux = 0;
          let auxDeaths = 0;
          aux += status.cases;
          auxDeaths += status.deaths;
          this.arrCases.push(aux);
          this.arrDeaths.push(auxDeaths);
        } else if (status.uf.includes('PA')) {
          let aux = 0;
          let auxDeaths = 0;
          aux += status.cases;
          auxDeaths += status.deaths;
          this.arrCases.push(aux);
          this.arrDeaths.push(auxDeaths);
        } else if (status.uf.includes('MA')) {
          let aux = 0;
          let auxDeaths = 0;
          aux += status.cases;
          auxDeaths += status.deaths;
          this.arrCases.push(aux);
          this.arrDeaths.push(auxDeaths);
        }
      });
      this.setChart();

    });
  }

  setChart() {
    const dataPrev = {
      2016: [
        ['São Paulo', this.arrCases[0]],
        ['Rio de Janeiro', this.arrCases[1]],
        ['Ceará', this.arrCases[2]],
        ['Pará', this.arrCases[3]],
        ['Maranhão', this.arrCases[4]],
      ]
    };

    const data = {
      2016: [
        ['São Paulo', this.arrDeaths[0]],
        ['Rio de Janeiro', this.arrDeaths[1]],
        ['Ceará', this.arrDeaths[2]],
        ['Pará', this.arrDeaths[3]],
        ['Maranhão', this.arrDeaths[4]],
      ]
    };

    const countries = [{
      name: 'São Paulo',
      flag: "SP",
      color: 'rgb(255, 255, 0)'
    }, {
      name: 'Rio de Janeiro',
      flag: "RJ",
      color: 'rgb(0, 0, 0)'
    }, {
      name: 'Ceará',
      flag: "CE",
      color: 'rgb(0, 0, 0)'
    }, {
      name: 'Pará',
      flag: "PA",
      color: 'rgb(0, 0, 0)'
    }, {
      name: 'Maranhão',
      flag: "MA",
      color: 'rgb(0, 0, 0)'
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
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      subtitle: {
        text: 'Relação confirmados/mortes',
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      plotOptions: {
        series: {
          grouping: false,
          borderWidth: 0
        },
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
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
          formatter: function () {
            var value = this.value,
              output;

            countries.forEach(function (country) {
              if (country.name === value) {
                output = country.flag;
              }
            });
            return '<span><img alt="Bandeira do estado" src="https://raw.githubusercontent.com/devarthurribeiro/covid19-brazil-api/master/static/flags/' + output + '.png" style="width: 60px; height: 60px; border-radius: 8px"/><br></span>';
          }
        }
      },
      yAxis: [{
        title: {
          text: 'Milhões',
          style: {
            fontFamily: 'Roboto, Verdana, sans-serif'
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
              fontFamily: 'Roboto, Verdana, sans-serif'
            }
          }],
          data: dataPrev[2016].slice(),
          name: 'Confirmados',
          style: {
            fontFamily: 'Roboto, Verdana, sans-serif'
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
              fontFamily: 'Roboto, Verdana, sans-serif'
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


