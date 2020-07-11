import { TestBed } from '@angular/core/testing';

import { ApuxService } from './apux.service';

describe('ApuxService', () => {
  let service: ApuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
