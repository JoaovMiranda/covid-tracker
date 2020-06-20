import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuldesteComponent } from './suldeste.component';

describe('SuldesteComponent', () => {
  let component: SuldesteComponent;
  let fixture: ComponentFixture<SuldesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuldesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuldesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
