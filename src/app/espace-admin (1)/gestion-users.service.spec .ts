import { TestBed } from '@angular/core/testing';

import { GestionUsersService } from './gestion-users.service';

describe('GestionUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionUsersService = TestBed.get(GestionUsersService);
    expect(service).toBeTruthy();
  });
});
