import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioArrays } from './ejercicio-arrays';

describe('EjercicioArrays', () => {
  let component: EjercicioArrays;
  let fixture: ComponentFixture<EjercicioArrays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioArrays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioArrays);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
