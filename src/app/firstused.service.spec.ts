import { TestBed, inject } from '@angular/core/testing';

import { FirstusedService } from './firstused.service';

describe('FirstusedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstusedService]
    });
  });

  it('should be created', inject([FirstusedService], (service: FirstusedService) => {
    expect(service).toBeTruthy();
  }));
});
