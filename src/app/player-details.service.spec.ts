import { TestBed, inject } from '@angular/core/testing';

import { PlayerDetailsService } from './player-details.service';

describe('PlayerDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerDetailsService]
    });
  });

  it('should be created', inject([PlayerDetailsService], (service: PlayerDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
