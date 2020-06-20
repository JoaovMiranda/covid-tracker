import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SymptomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gov() {
    window.open('https://coronavirus-app.saude.gov.br/app/inicio', '_blank');
  }

}
