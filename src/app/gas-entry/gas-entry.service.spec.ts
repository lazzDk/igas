/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GasEntryService } from './gas-entry.service';

describe('Service: GasEntry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GasEntryService]
    });
  });

  it('should ...', inject([GasEntryService], (service: GasEntryService) => {
    expect(service).toBeTruthy();
  }));
});
