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
        text: 'Column chart with negative values'
      },
      subtitle: {
        text: 'All cases confirmed',
      },
      xAxis: {
        categories: ['2020']
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
      series: [{
        name: 'Confirmados',
        data: [this.cabra[0][0].cases]
      }, {
        name: 'Suspeitos',
        data: [2]
      }, {
        name: 'Recuperados',
        data: [3]
      }, {
        name: 'Mortos',
        data: [3]
      }]
    };
  }
}
