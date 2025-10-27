import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoArticulo } from './nuevo-articulo';

describe('NuevoArticulo', () => {
  let component: NuevoArticulo;
  let fixture: ComponentFixture<NuevoArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoArticulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
