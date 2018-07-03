import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2contentComponent } from './modal2content.component';

describe('Modal2contentComponent', () => {
  let component: Modal2contentComponent;
  let fixture: ComponentFixture<Modal2contentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal2contentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal2contentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
