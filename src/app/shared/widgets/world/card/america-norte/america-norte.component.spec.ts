import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaNorteComponent } from './america-norte.component';

describe('AmericaNorteComponent', () => {
  let component: AmericaNorteComponent;
  let fixture: ComponentFixture<AmericaNorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaNorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaNorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
