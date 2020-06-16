import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaCardComponent } from './africa-card.component';

describe('AfricaCardComponent', () => {
  let component: AfricaCardComponent;
  let fixture: ComponentFixture<AfricaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
