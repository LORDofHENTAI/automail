import { TestBed } from '@angular/core/testing';

import { SBOOKService } from './sbook.service';

describe('SBOOKService', () => {
  let service: SBOOKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SBOOKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
