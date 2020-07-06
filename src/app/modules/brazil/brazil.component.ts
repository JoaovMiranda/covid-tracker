import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.component.html',
  styleUrls: ['./brazil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BrazilComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
