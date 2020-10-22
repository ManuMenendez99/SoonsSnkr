import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarAEmpresaComponent } from './cambiar-aempresa.component';

describe('CambiarAEmpresaComponent', () => {
  let component: CambiarAEmpresaComponent;
  let fixture: ComponentFixture<CambiarAEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarAEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarAEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
