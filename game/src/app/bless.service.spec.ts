import { TestBed } from '@angular/core/testing';

import { BlessService } from './bless.service';

describe('BlessService', () => {
  let service: BlessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
