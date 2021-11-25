import { TestBed } from '@angular/core/testing';

import { TagsProductosService } from './tags-productos.service';

describe('TagsProductosService', () => {
  let service: TagsProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
