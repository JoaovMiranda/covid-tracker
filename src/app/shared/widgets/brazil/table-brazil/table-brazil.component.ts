import { Component, OnInit, ViewChild } from '@angular/core';
import { TableBrazil } from './table-brazil.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-table-brazil',
  templateUrl: './table-brazil.component.html',
  styleUrls: ['./table-brazil.component.scss']
})
export class TableBrazilComponent implements OnInit {

  ELEMENT_DATA: TableBrazil[];

  displayedColumns: string[] = ['state', 'cases', 'deaths', 'refuses'];

  dataSource = new MatTableDataSource<TableBrazil>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getData = () => this.appService.getStates().subscribe(res => console.log(res));

  // this.dataSource.data = res as TableBrazil[]
}
