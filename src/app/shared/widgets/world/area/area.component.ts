import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-widget-area-world',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  href: string;
  arrAux = [];
  chartOptions: {};
  Highcharts = Highcharts;
  isLoading = false;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getCases();
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  // ATIVOS
  getCases() {
    this.isLoading = true;
    return this.appService.getContinents().subscribe(res => {
      let auxCases = 0;
      let auxDeaths = 0;
      let auxActive = 0;
      let auxRecovered = 0;
      let auxPopulation = 0;
      res.filter(status => {
        auxDeaths += status.deaths;
        auxCases += status.cases;
        auxActive += status.active;
        auxRecovered += status.recovered;
        auxPopulation += status.population;
      });
      const popPerc = (auxCases * 100) / auxPopulation;
      this.arrAux.push(auxCases);
      this.arrAux.push(auxDeaths);
      this.arrAux.push(auxActive);
      this.arrAux.push(auxRecovered);
      this.arrAux.push(auxPopulation);
      this.arrAux.push(popPerc);
      this.setChart();
    });
  }

  setChart() {
    const data: any = {};
    data.ativos = this.arrAux[2];
    data.mortos = this.arrAux[1];
    data.recuperados = this.arrAux[3];
    data.confirmados = this.arrAux[0];

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'MUNDO',
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      subtitle: {
        text: 'Casos',
        style: {
          fontFamily: 'Roboto, Verdana, sans-serif'
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: 'Roboto, Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'População',
          style: {
            fontFamily: 'Roboto, Verdana, sans-serif'
          }
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
      tooltip: {
        pointFormat: '<b>{point.y}</b>',
        fontFamily: 'Roboto, Verdana, sans-serif'

      },
      series: [{
        name: 'População',
        data: [
          ['Confirmados', data.confirmados],
          ['Recuperados', data.recuperados],
          ['Mortos', data.mortos],
          ['Ativos', data.ativos],
        ],
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y}',
          y: 5,
          style: {
            fontSize: '14px',
            fontFamily: 'Roboto, Verdana, sans-serif'
          }
        }
      }]
    };
    this.href = `https://wa.me/?text=
    %F0%9F%93%8A%20Covid19%20Tracker%20Brazil%20-%20
    %20%2AMundo%2A%20%F0%9F%8C%90%20%20%0A%0A%F0%9F%95%90%20
    %2AAtualizado%2A%20252525%0A%0A
    %F0%9F%97%B8%20Total%20de%20casos%3A%20%2A${data.confirmados}%2A%0A%
    F0%9F%92%80%20Total%20de%20mortos%3A%20%2A${data.mortos}%2A%0A%
    F0%9F%92%8A%20Total%20de%20recuperados%3A%20%2A${data.recuperados}%2A%0A%
    F0%9F%94%A5%20Total%20de%20ativos%3A%20%2A${data.ativos}%2A%0A%0A
    %2AFonte%3A%2A%20WHO%2C%20CDC%2C%20ECDC%2C%20NHC%20and%20DXY%0A
    https%3A%2F%2Fcovid19trackerbrazil.netlify.app%2F%0A%0A`;
    this.isLoading = false;
  }
}


// %F0%9F%93%8A%20Covid19%20Tracker%20Brazil%20-%20%20%2AMundo%2A%20%F0%9F%8C%90%20%20%0A%0A%F0%9F%95%90%20%2AAtualizado%2A%20252525%0A%0A%F0%9F%97%B8%20Total%20de%20casos%3A%20%2A999%2A%0A%F0%9F%92%80%20Total%20de%20mortos%3A%20%2A999%2A%0A%F0%9F%92%8A%20Total%20de%20recuperados%3A%20%2A999%2A%0A%F0%9F%94%A5%20Total%20de%20ativos%3A%20%2A999%2A%0A%0A%2AFonte%3A%2A%20WHO%2C%20CDC%2C%20ECDC%2C%20NHC%20and%20DXY%0Ahttps%3A%2F%2Fcovid19trackerbrazil.netlify.app%2F%0A%0A