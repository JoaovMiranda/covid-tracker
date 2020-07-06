import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMobComponent } from './footer-mob.component';

describe('FooterMobComponent', () => {
  let component: FooterMobComponent;
  let fixture: ComponentFixture<FooterMobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
