import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardaNombreGuard } from './guarda-nombre-guard';

describe('guardaNombreGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardaNombreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
