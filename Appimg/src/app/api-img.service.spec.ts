import { TestBed } from '@angular/core/testing';

import { ApiImgService } from './api-img.service';

describe('ApiImgService', () => {
  let service: ApiImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
