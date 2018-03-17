import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontainerDemoComponent } from './ngcontainer-demo.component';

describe('NgcontainerDemoComponent', () => {
  let component: NgcontainerDemoComponent;
  let fixture: ComponentFixture<NgcontainerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontainerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontainerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
