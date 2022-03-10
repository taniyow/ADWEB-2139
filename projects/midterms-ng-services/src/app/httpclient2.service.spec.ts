import { TestBed } from '@angular/core/testing';

import { Httpclient2Service } from './httpclient2.service';

describe('Httpclient2Service', () => {
  let service: Httpclient2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Httpclient2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
