import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazilComponent } from './brazil.component';

describe('BrazilComponent', () => {
  let component: BrazilComponent;
  let fixture: ComponentFixture<BrazilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
