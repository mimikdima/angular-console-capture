import { TestBed } from '@angular/core/testing';

import { AngularConsoleCaptureService } from './angular-console-capture.service';

describe('AngularConsoleCaptureService', () => {
  let service: AngularConsoleCaptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularConsoleCaptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
