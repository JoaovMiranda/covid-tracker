import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorldComponent implements OnInit {

  bigChartWorld: any = [];
  cards = [];
  countries : string[] = [];



  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // this.getData();
    this.cards.push(3000000);
    this.cards.push(4500000);
    this.cards.push(6700000);
    this.cards.push(7800000);
    console.log(this.cards)
  }

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
            this.cards.push(auxCases);
            this.cards.push(auxDeaths);
            this.cards.push(auxConfirmed);
            this.cards.push(auxRecovered);
            console.log(this.cards);
            this.cards = this.cards;
            // this.ngOnInit();
          }
        }
      });
    });
  }

}
