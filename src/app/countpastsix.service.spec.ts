import { TestBed, inject } from '@angular/core/testing';

import { CountpastsixService } from './countpastsix.service';

describe('CountpastsixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountpastsixService]
    });
  });

  it('should be created', inject([CountpastsixService], (service: CountpastsixService) => {
    expect(service).toBeTruthy();
  }));
});
