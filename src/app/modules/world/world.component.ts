import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  bigChartWorld: any = [];


  constructor() { }

  ngOnInit(): void {
  }

}
