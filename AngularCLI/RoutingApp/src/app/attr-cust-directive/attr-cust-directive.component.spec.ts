import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrCustDirectiveComponent } from './attr-cust-directive.component';

describe('AttrCustDirectiveComponent', () => {
  let component: AttrCustDirectiveComponent;
  let fixture: ComponentFixture<AttrCustDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrCustDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrCustDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
