import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarArticulo } from './borrar-articulo';

describe('BorrarArticulo', () => {
  let component: BorrarArticulo;
  let fixture: ComponentFixture<BorrarArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrarArticulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
