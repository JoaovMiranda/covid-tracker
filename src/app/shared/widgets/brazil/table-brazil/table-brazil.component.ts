import { Component, OnInit, ViewChild } from '@angular/core';
import { TableElement } from './table-brazil.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-table-brazil',
  templateUrl: './table-brazil.component.html',
  styleUrls: ['./table-brazil.component.scss']
})
export class TableBrazilComponent implements OnInit {

  ELEMENT_DATA: TableElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
  ];

  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ['position', 'name', 'cases', 'deaths'];

  dataSource = new MatTableDataSource<TableElement>(this.ELEMENT_DATA);


  constructor() { }

  ngOnInit(): void {
  }

}
