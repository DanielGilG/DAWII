import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarArticulo } from './modificar-articulo';

describe('ModificarArticulo', () => {
  let component: ModificarArticulo;
  let fixture: ComponentFixture<ModificarArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarArticulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
