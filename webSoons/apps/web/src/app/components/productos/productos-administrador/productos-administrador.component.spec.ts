import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAdministradorComponent } from './productos-administrador.component';

describe('ProductosAdministradorComponent', () => {
  let component: ProductosAdministradorComponent;
  let fixture: ComponentFixture<ProductosAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
