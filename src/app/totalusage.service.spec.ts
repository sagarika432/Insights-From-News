import { TestBed, inject } from '@angular/core/testing';

import { TotalusageService } from './totalusage.service';

describe('TotalusageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalusageService]
    });
  });

  it('should be created', inject([TotalusageService], (service: TotalusageService) => {
    expect(service).toBeTruthy();
  }));
});
