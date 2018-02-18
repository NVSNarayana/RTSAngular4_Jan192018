import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefiendPipesComponent } from './predefiend-pipes.component';

describe('PredefiendPipesComponent', () => {
  let component: PredefiendPipesComponent;
  let fixture: ComponentFixture<PredefiendPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefiendPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefiendPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
