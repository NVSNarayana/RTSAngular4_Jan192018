import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTonTestComponent } from './single-ton-test.component';

describe('SingleTonTestComponent', () => {
  let component: SingleTonTestComponent;
  let fixture: ComponentFixture<SingleTonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
