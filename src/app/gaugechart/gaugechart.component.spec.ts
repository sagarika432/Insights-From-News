import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugechartComponent } from './gaugechart.component';

describe('GaugechartComponent', () => {
  let component: GaugechartComponent;
  let fixture: ComponentFixture<GaugechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
