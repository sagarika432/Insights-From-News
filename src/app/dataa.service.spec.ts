import { TestBed, inject } from '@angular/core/testing';

import { DataaService } from './dataa.service';

describe('DataaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataaService]
    });
  });

  it('should be created', inject([DataaService], (service: DataaService) => {
    expect(service).toBeTruthy();
  }));
});
