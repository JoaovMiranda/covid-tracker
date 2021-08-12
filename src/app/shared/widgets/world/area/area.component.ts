import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AppService } from 'src/app/core/services/app.service';
import { sumValuesArray } from 'src/app/shared/helpers/arrays.helper';
import { dispatchThisEvent } from 'src/app/shared/helpers/unusual.helper';
import { statusPTBR } from 'src/app/shared/model/allContries.model';
import { fontFamily } from 'src/app/shared/model/constants';
import { AllContinents } from 'src/app/shared/model/interfaces.model';

@Component({
  selector: 'app-widget-area-world',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  href: string;
  chartOptions: {};
  Highcharts = Highcharts;
  isLoading = false;

  dataToFill: (string | number)[][] = [];
  outSideData: { [x: string]: number }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getCases();
    HC_exporting(Highcharts);
    dispatchThisEvent();

  }

  returnValue(value) {
    return value ? value : 0
  }

  // ATIVOS
  private getCases(): void {
    this.isLoading = true;
    this.appService.getContinents().subscribe(
      res => {
        this.buildData(res)
        this.setChart();
      },
      err => {
        console.log(err)
      });
  }

  private buildData(res: AllContinents[]): void {
    this.dataToFill = [
      [statusPTBR.C, sumValuesArray(res, 'cases')],
      [statusPTBR.R, sumValuesArray(res, 'recovered')],
      [statusPTBR.M, sumValuesArray(res, 'deaths')],
      [statusPTBR.A, sumValuesArray(res, 'active')],
    ]
    this.outSideData = {
      [statusPTBR.P]: sumValuesArray(res, 'population'),
      [statusPTBR.PP]: (sumValuesArray(res, 'cases') * 100) / sumValuesArray(res, 'population'),
    }
  }

  private setChart(): void {
    this.chartOptions = {
      chart: { type: 'column' },
      title: {
        text: 'MUNDO',
        style: { fontFamily: fontFamily }
      },
      subtitle: {
        text: 'Casos',
        style: { fontFamily: fontFamily }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: fontFamily
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'População',
          style: { fontFamily: fontFamily }
        }
      },
      credits: { enabled: false },
      exporting: { enabled: true },
      legend: { enabled: false },
      tooltip: {
        pointFormat: '<b>{point.y}</b>',
        fontFamily: fontFamily
      },
      series: [{
        name: 'População',
        data: this.dataToFill,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y}',
          y: 5,
          style: {
            fontSize: '14px',
            fontFamily: fontFamily
          }
        }
      }]
    };
    // this.href = `https://wa.me/?text=
    // %F0%9F%93%8A%20Covid19%20Tracker%20Brazil%20-%20
    // %20%2AMundo%2A%20%F0%9F%8C%90%20%20%0A%0A%F0%9F%95%90%20
    // %2AAtualizado%2A%20252525%0A%0A
    // %F0%9F%97%B8%20Total%20de%20casos%3A%20%2A${data.confirmados}%2A%0A%
    // F0%9F%92%80%20Total%20de%20mortos%3A%20%2A${data.mortos}%2A%0A%
    // F0%9F%92%8A%20Total%20de%20recuperados%3A%20%2A${data.recuperados}%2A%0A%
    // F0%9F%94%A5%20Total%20de%20ativos%3A%20%2A${data.ativos}%2A%0A%0A
    // %2AFonte%3A%2A%20WHO%2C%20CDC%2C%20ECDC%2C%20NHC%20and%20DXY%0A
    // https%3A%2F%2Fcovid19trackerbrazil.netlify.app%2F%0A%0A`;
    this.isLoading = false;
  }
}


// %F0%9F%93%8A%20Covid19%20Tracker%20Brazil%20-%20%20%2AMundo%2A%20%F0%9F%8C%90%20%20%0A%0A%F0%9F%95%90%20%2AAtualizado%2A%20252525%0A%0A%F0%9F%97%B8%20Total%20de%20casos%3A%20%2A999%2A%0A%F0%9F%92%80%20Total%20de%20mortos%3A%20%2A999%2A%0A%F0%9F%92%8A%20Total%20de%20recuperados%3A%20%2A999%2A%0A%F0%9F%94%A5%20Total%20de%20ativos%3A%20%2A999%2A%0A%0A%2AFonte%3A%2A%20WHO%2C%20CDC%2C%20ECDC%2C%20NHC%20and%20DXY%0Ahttps%3A%2F%2Fcovid19trackerbrazil.netlify.app%2F%0A%0A