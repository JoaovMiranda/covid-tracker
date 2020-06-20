import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorldComponent implements OnInit {

  bigChartWorld: any = [];


  constructor() { }

  ngOnInit(): void {
  }

}
