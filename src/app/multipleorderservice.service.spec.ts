import { TestBed } from '@angular/core/testing';

import { MultipleorderserviceService } from './multipleorderservice.service';

describe('MultipleorderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleorderserviceService = TestBed.get(MultipleorderserviceService);
    expect(service).toBeTruthy();
  });
});
