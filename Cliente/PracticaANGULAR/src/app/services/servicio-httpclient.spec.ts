import { TestBed } from '@angular/core/testing';

import { ServicioHttpclient } from './servicio-httpclient';

describe('ServicioHttpclient', () => {
  let service: ServicioHttpclient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHttpclient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
