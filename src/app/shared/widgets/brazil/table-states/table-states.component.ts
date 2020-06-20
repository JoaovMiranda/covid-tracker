import { Component, OnInit } from '@angular/core';
import { TableElement } from './table-states.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-states',
  templateUrl: './table-states.component.html',
  styleUrls: ['./table-states.component.scss']
})
export class TableStatesComponent implements OnInit {

  ELEMENT_DATA: TableElement[] = [
    { state: '1', confirmed: 1.0079, deaths: 1.0079 },
    { state: '2', confirmed: 1.0079, deaths: 4.0026 },
    { state: '3', confirmed: 1.0079, deaths: 6.941 },
    { state: '6', confirmed: 1.0079, deaths: 9.0122 },
    { state: '5', confirmed: 1.0079, deaths: 10.811 },
    { state: '7', confirmed: 1.0079, deaths: 1.0079 },
    { state: '8', confirmed: 1.0079, deaths: 4.0026 },
    { state: '9', confirmed: 1.0079, deaths: 6.941 },
    { state: '10', confirmed: 1.0079, deaths: 9.0122 },
    { state: '11', confirmed: 1.0079, deaths: 1.0079 },
    { state: '21', confirmed: 1.0079, deaths: 4.0026 },
    { state: '32', confirmed: 1.0079, deaths: 6.941 },
    { state: '44', confirmed: 1.0079, deaths: 9.0122 },
  ];

  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ['state', 'confirmed', 'deaths'];

  dataSource = new MatTableDataSource<TableElement>(this.ELEMENT_DATA);


  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
