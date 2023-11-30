import { TestBed } from '@angular/core/testing';

import { YadVashemService } from './yad-vashem.service';

describe('YadVashemService', () => {
  let service: YadVashemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YadVashemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
