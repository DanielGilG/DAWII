import { TestBed } from '@angular/core/testing';

import { ServicioArticulo } from './servicio-articulo';

describe('ServicioArticulo', () => {
  let service: ServicioArticulo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioArticulo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
