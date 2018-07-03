import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedpiechartComponent } from './advancedpiechart.component';

describe('AdvancedpiechartComponent', () => {
  let component: AdvancedpiechartComponent;
  let fixture: ComponentFixture<AdvancedpiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedpiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
