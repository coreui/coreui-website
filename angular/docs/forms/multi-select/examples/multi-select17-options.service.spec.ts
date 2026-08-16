import { TestBed } from '@angular/core/testing';

import { MultiSelect17OptionsService } from './multi-select17-options.service';

describe('MultiSelect17OptionsService', () => {
  let service: MultiSelect17OptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiSelect17OptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
