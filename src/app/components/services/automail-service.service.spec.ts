import { TestBed } from '@angular/core/testing';

import { AutomailServiceService } from './automail-service.service';

describe('AutomailServiceService', () => {
  let service: AutomailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
