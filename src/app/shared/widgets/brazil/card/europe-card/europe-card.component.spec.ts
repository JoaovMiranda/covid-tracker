import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeCardComponent } from './europe-card.component';

describe('EuropeCardComponent', () => {
  let component: EuropeCardComponent;
  let fixture: ComponentFixture<EuropeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
