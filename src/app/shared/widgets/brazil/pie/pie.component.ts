import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-pie-brazil',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieBrazilComponent implements OnInit {

  Highcharts = Highcharts;

  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.teste();
    // this.chartOptions = {
    //   chart: {
    //     plotBackgroundColor: null,
    //     plotBorderWidth: null,
    //     plotShadow: false,
    //     type: 'pie'
    //   },
    //   title: {
    //     text: null
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   accessibility: {
    //     point: {
    //       valueSuffix: '%'
    //     }
    //   },
    //   exporting: {
    //     enabled: false
    //   },
    //   credits: {
    //     enabled: true
    //   },
    //   plotOptions: {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: 'pointer',
    //       dataLabels: {
    //         enabled: true,
    //         format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //       }
    //     }
    //   },
    //   series: [{
    //     name: 'Brands',
    //     colorByPoint: true,
    //     data: [55, 45, 71, 2]
    //   }]
    // };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

    HC_exporting(this.Highcharts);
  }

  teste() {
    const dataPrev = {
      2016: [
        ['South Korea', 5],
        ['Japan', 0],
        ['Australia', 50],
        ['Germany', 11],
        ['Russia', 24],
      ]
    };

    const data = {
      2016: [
        ['South Korea', 10],
        ['Japan', 12],
        ['Australia', 0],
        ['Germany', 17],
        ['Russia', 19],

      ]
    };

    const countries = [{
      name: 'a',
      color: 'rgb(0, 0, 255)'
    }, {
      name: 'São Paulo',
      color: 'rgb(0, 0, 255)'
    }, {
      name: 'Pernambuco',
      color: 'rgb(0, 0, 255)'
    }, {
      name: 'Para',
      color: 'rgb(0, 0, 255)'
    }, {
      name: 'Piaui',
      color: 'rgb(240, 240, 240)'
    }];

    function getData(data) {
      return data.map(function(country, i) {
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
        text: 'teste'
      },
      subtitle: {
        text: 'teste'
      },
      plotOptions: {
        series: {
          grouping: false,
          borderWidth: 0
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        shared: true,
        headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} medals</b><br/>'
      },
      xAxis: {
        type: 'category',
        max: 4,
        labels: {
          useHTML: true,
          animate: true,
        }
      },
      yAxis: [{
        title: {
          text: 'Gold medals'
        },
        showFirstLabel: false
      }],
      series: [{
        color: 'rgb(0, 0, 0)',
        pointPlacement: -0.2,
        linkedTo: 'main',
        data: dataPrev[2016].slice(),
        name: '2012'
      }, {
        name: '2016',
        id: 'main',
        dataSorting: {
          enabled: true,
          matchByName: true
        },
        dataLabels: [{
          enabled: true,
          inside: true,
          style: {
            fontSize: '16px'
          }
        }],
        data: getData(data[2016]).slice()
      }],
      exporting: {
        allowHTML: true
      }
    };
  }

}


