/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarsService } from './Cars.service';

describe('Service: Cars', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsService]
    });
  });

  it('should ...', inject([CarsService], (service: CarsService) => {
    expect(service).toBeTruthy();
  }));
});
