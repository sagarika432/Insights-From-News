import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuploginComponent } from './signuplogin.component';

describe('SignuploginComponent', () => {
  let component: SignuploginComponent;
  let fixture: ComponentFixture<SignuploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
