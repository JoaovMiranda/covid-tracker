import { Component, OnInit, Input, Pipe } from '@angular/core';
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
  soma = 0;
  chartOptions: {};
  Highcharts: typeof Highcharts = Highcharts;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  // ATIVOS
  getData() {
    return this.appService.getStates().subscribe(res => {
      const AUX = Object.values(res);
      let auxCases = 0;
      let auxDeaths = 0;
      let auxConfirmed = 0;
      let auxRecovered = 0;
      AUX.map((e: any) => {
        for (let i = 0; i <= e.length; i++) {
          auxCases += e[i].cases;
          auxDeaths += e[i].deaths;
          auxConfirmed += e[i].suspects;
          auxRecovered += e[i].refuses;
          if (i === 26) {
            this.cabra.push(auxCases);
            this.cabra.push(auxDeaths);
            this.cabra.push(auxConfirmed);
            this.cabra.push(auxRecovered);
            this.setGraph();
          }
        }
      });
    });
  }

  setGraph() {

    const data = [
      ['Confirmados', this.cabra[0]],
      ['Mortos', this.cabra[1]],
      ['Suspeitas', this.cabra[2]],
      ['Recuperados', this.cabra[3]]
    ];
    this.chartOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: 'Contents of Highsoft\'s weekly fruit delivery'
      },
      subtitle: {
        text: '3D donut in Highcharts'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      legend: {
        reversed: false
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      series: [{  data  }]
    };
  }
}
