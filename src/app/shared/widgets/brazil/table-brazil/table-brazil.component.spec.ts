import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBrazilComponent } from './table-brazil.component';

describe('TableBrazilComponent', () => {
  let component: TableBrazilComponent;
  let fixture: ComponentFixture<TableBrazilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBrazilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBrazilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
