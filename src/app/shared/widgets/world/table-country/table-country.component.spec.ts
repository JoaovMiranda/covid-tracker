import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCountryComponent } from './table-country.component';

describe('TableCountryComponent', () => {
  let component: TableCountryComponent;
  let fixture: ComponentFixture<TableCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
