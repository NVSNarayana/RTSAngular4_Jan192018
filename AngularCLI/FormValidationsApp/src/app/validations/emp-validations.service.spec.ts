import { TestBed, inject } from '@angular/core/testing';

import { EmpValidationsService } from './emp-validations.service';

describe('EmpValidationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpValidationsService]
    });
  });

  it('should be created', inject([EmpValidationsService], (service: EmpValidationsService) => {
    expect(service).toBeTruthy();
  }));
});
