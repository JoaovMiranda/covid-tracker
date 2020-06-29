import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableCountries } from '../../world/table-countries/table-countries.model';
import { AppService } from 'src/app/core/services/app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styleUrls: ['./table-countries.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableCountriesComponent implements OnInit {

  ELEMENT_DATA: TableCountries[];

  displayedColumns: string[] = ['country', 'cases', 'deaths', 'recovered', 'active'];

  dataSource = new MatTableDataSource<TableCountries>(this.ELEMENT_DATA);

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

  getData = () => this.appService.getCountries().subscribe(res => this.dataSource.data = res as TableCountries[]);

}
