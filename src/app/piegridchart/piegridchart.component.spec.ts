import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiegridchartComponent } from './piegridchart.component';

describe('PiegridchartComponent', () => {
  let component: PiegridchartComponent;
  let fixture: ComponentFixture<PiegridchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiegridchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiegridchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
