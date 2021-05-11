import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionMarcasComponent } from './configuracion-marcas.component';

describe('ConfiguracionMarcasComponent', () => {
  let component: ConfiguracionMarcasComponent;
  let fixture: ComponentFixture<ConfiguracionMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
