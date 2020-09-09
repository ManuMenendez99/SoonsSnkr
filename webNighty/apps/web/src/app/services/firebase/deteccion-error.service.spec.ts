import { TestBed } from '@angular/core/testing';

import { DeteccionErrorService } from './deteccion-error.service';

describe('DeteccionErrorService', () => {
  let service: DeteccionErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeteccionErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
