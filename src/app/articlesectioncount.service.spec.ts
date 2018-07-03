import { TestBed, inject } from '@angular/core/testing';

import { ArticlesectioncountService } from './articlesectioncount.service';

describe('ArticlesectioncountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesectioncountService]
    });
  });

  it('should be created', inject([ArticlesectioncountService], (service: ArticlesectioncountService) => {
    expect(service).toBeTruthy();
  }));
});
