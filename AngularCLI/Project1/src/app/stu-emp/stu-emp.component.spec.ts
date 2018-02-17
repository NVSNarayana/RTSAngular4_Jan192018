import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuEmpComponent } from './stu-emp.component';

describe('StuEmpComponent', () => {
  let component: StuEmpComponent;
  let fixture: ComponentFixture<StuEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
