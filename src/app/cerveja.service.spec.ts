/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { CervejaService } from './cerveja.service';


describe('CervejaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CervejaService]
    });
  });

  it('should ...', inject([CervejaService], (service: CervejaService) => {
    expect(service).toBeTruthy();
  }));
});
