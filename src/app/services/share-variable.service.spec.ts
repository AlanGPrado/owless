import { TestBed } from '@angular/core/testing';

import { ShareVariableService } from './share-variable.service';

describe('ShareVariableService', () => {
  let service: ShareVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
