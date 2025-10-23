import { TestBed } from '@angular/core/testing';

import { Sujeto } from './sujeto';

describe('Sujeto', () => {
  let service: Sujeto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sujeto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
