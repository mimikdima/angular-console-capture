import { TestBed } from '@angular/core/testing';

import { ConsoleCaptureService } from './console-capture.service';

describe('ConsoleCaptureService', () => {
  let service: ConsoleCaptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleCaptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
