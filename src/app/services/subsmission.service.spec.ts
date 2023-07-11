import { TestBed } from '@angular/core/testing';

import { SubsmissionService } from './subsmission.service';

describe('SubsmissionService', () => {
  let service: SubsmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
