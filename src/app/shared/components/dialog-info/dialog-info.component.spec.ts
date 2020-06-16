import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoComponent } from './dialog-info.component';

describe('DialogInfoComponent', () => {
  let component: DialogInfoComponent;
  let fixture: ComponentFixture<DialogInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
