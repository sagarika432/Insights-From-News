import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piegridchart1Component } from './piegridchart1.component';

describe('Piegridchart1Component', () => {
  let component: Piegridchart1Component;
  let fixture: ComponentFixture<Piegridchart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piegridchart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piegridchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
