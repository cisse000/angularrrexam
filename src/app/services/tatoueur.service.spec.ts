import { TestBed } from '@angular/core/testing';

import { TatoueurService } from './tatoueur.service';

describe('TatoueurService', () => {
  let service: TatoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TatoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
