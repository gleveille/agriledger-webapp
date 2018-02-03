import { TestBed, inject } from '@angular/core/testing';

import { LogPublisherService } from './log-publisher.service';

describe('LogPublisherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogPublisherService]
    });
  });

  it('should be created', inject([LogPublisherService], (service: LogPublisherService) => {
    expect(service).toBeTruthy();
  }));
});
