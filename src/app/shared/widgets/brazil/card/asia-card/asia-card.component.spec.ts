import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaCardComponent } from './asia-card.component';

describe('AsiaCardComponent', () => {
  let component: AsiaCardComponent;
  let fixture: ComponentFixture<AsiaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
