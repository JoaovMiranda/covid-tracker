import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorldComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
}
