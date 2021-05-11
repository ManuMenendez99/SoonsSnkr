import { TestBed } from '@angular/core/testing';

import { BottomsService } from './bottoms.service';

describe('BottomsService', () => {
  let service: BottomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
