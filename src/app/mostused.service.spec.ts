import { TestBed, inject } from '@angular/core/testing';

import { MostusedService } from './mostused.service';

describe('MostusedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MostusedService]
    });
  });

  it('should be created', inject([MostusedService], (service: MostusedService) => {
    expect(service).toBeTruthy();
  }));
});
