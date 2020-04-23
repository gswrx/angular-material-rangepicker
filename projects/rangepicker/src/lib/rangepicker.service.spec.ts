import { TestBed } from '@angular/core/testing';

import { RangepickerService } from './rangepicker.service';

describe('RangepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RangepickerService = TestBed.get(RangepickerService);
    expect(service).toBeTruthy();
  });
});
