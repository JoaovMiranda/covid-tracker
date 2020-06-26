import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-widget-area-world',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  cabra = [];
  chartOptions: {};
  @Input() data: any = [];
  Highcharts = Highcharts;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getCases();
    this.setGarph();
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

  // ATIVOS
  getCases() {
    return this.appService.getCountries().subscribe(res => {
      const AUX = Object.values(res);
      let auxCases = 0;
      let auxDeaths = 0;
      let auxConfirmed = 0;
      let auxRecovered = 0;
      AUX.map((e: any) => {
        for (let i = 0; i <= e.length; i++) {
          auxCases += e[i].cases;
          auxDeaths += e[i].deaths;
          auxConfirmed += e[i].confirmed;
          auxRecovered += e[i].recovered;
          if (i === 187) {
            this.cabra.push(auxCases);
            this.cabra.push(auxDeaths);
            this.cabra.push(auxConfirmed);
            this.cabra.push(auxRecovered);
            // console.log(this.cabra)
            this.setGarph();

          }
        }
      });
    });
  }

  setGarph() {
    this.chartOptions = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'World\'s largest cities per 2017'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '50px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Shanghai', 46510],
            ['Beijing', 11278],
            ['Karachi', 1841],
            ['Shenzhen', 955377],
            
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
    }
    // this.chartOptions = {
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'MUNDO'
    //   },
    //   subtitle: {
    //     text: 'Todos os casos',
    //   },
    //   xAxis: {
    //     categories: ['2020']
    //   },
    //   credits: {
    //     enabled: false
    //   },
    //   exporting: {
    //     enabled: true
    //   },
    //   legend: {
    //     reversed: true
    //   },
    //   series: [{
    //     name: 'Ativos',
    //     data: [this.cabra[0]]
    //   }, {
    //     name: 'Mortos',
    //     data: [this.cabra[1]]
    //   }, {
    //     name: 'Confirmados',
    //     data: [this.cabra[2]]
    //   }, {
    //     name: 'Recuperados',
    //     data: [this.cabra[3]]
    //   }, {
    //     name: 'aaa',
    //     data: [this.cabra[3]]
    //   }]
    // };
  }
}
