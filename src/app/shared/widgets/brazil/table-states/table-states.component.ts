import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableStates } from './table-states.model';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/core/services/app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table-states',
  templateUrl: './table-states.component.html',
  styleUrls: ['./table-states.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableStatesComponent implements OnInit {

  ELEMENT_DATA: TableStates[];

  displayedColumns: string[] = ['state', 'cases', 'deaths', 'refuses'];

  dataSource = new MatTableDataSource<TableStates>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  isLoading = false;

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

  getData = () => {
    this.isLoading = true;
    this.appService.getStates().subscribe(res => this.dataSource.data = res.data as TableStates[]);
    this.isLoading = false;
  }

}
