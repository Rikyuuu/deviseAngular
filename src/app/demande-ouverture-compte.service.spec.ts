import { TestBed } from '@angular/core/testing';

import { DemandeOuvertureCompteService } from './demande-ouverture-compte.service';

describe('DemandeOuvertureCompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeOuvertureCompteService = TestBed.get(DemandeOuvertureCompteService);
    expect(service).toBeTruthy();
  });
});
