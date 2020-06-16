import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-widget-area-brazil',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaBrazilComponent implements OnInit {
  cabra = [];

  chartOptions: {};
  @Input() data: any = [];
  Highcharts = Highcharts;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.algo();
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  algo() {
    return this.appService.listar().subscribe(res => {
      const arrAux = [];
      let teste = Object.values(res);
      teste.map((e: any) => {
        // console.log(e)
        // const unidade: any = {};
        // unidade.cases = e[0].cases;
        // unidade.deaths = e[0].deaths;
        // unidade.refuses = e[0].refuses;
        arrAux.push(e);
      });
      this.cabra = arrAux;
      this.setGarph();
    });
  }


  setGarph() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'World'
      },
      subtitle: {
        text: 'All cases confirmed'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
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
      // yAxis: {
      //   title: {
      //     text: 'Millions'
      //   },
      //   // labels: {
      //   //   formatter: function () {
      //   //     return this.value / 1000;
      //   //   }
      //   // }
      // },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
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
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'a ',
        data: [
          ['a',2]
          // ['teste1', this.cabra[0][0].cases],
          // ['teste2', this.cabra[0][0].deaths],
          // ['teste3', this.cabra[0][0].refuses],
        ],
      }]
    };
  }
}
