import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaCardComponent } from './oceania-card.component';

describe('OceaniaCardComponent', () => {
  let component: OceaniaCardComponent;
  let fixture: ComponentFixture<OceaniaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceaniaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceaniaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
