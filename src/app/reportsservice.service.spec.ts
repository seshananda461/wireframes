import { TestBed } from '@angular/core/testing';

import { ReportsserviceService } from './reportsservice.service';

describe('ReportsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportsserviceService = TestBed.get(ReportsserviceService);
    expect(service).toBeTruthy();
  });
});
