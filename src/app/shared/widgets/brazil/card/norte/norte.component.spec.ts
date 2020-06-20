import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorteComponent } from './norte.component';

describe('NorteComponent', () => {
  let component: NorteComponent;
  let fixture: ComponentFixture<NorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
