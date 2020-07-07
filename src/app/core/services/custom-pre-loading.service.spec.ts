import { TestBed } from '@angular/core/testing';

import { CustomPreLoadingService } from './custom-pre-loading.service';

describe('CustomPreLoadingService', () => {
  let service: CustomPreLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
