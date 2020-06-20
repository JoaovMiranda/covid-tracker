import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStatesComponent } from './table-states.component';

describe('TableStatesComponent', () => {
  let component: TableStatesComponent;
  let fixture: ComponentFixture<TableStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
