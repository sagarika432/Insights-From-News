import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1contentComponent } from './modal1content.component';

describe('Modal1contentComponent', () => {
  let component: Modal1contentComponent;
  let fixture: ComponentFixture<Modal1contentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal1contentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal1contentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
