import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCountriesComponent } from './table-countries.component';

describe('TableCountriesComponent', () => {
  let component: TableCountriesComponent;
  let fixture: ComponentFixture<TableCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
