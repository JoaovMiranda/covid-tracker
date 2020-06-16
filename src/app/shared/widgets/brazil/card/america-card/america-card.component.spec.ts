import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaCardComponent } from './america-card.component';

describe('AmericaCardComponent', () => {
  let component: AmericaCardComponent;
  let fixture: ComponentFixture<AmericaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
