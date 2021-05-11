import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionarMensajeriaComponent } from './condicionar-mensajeria.component';

describe('CondicionarMensajeriaComponent', () => {
  let component: CondicionarMensajeriaComponent;
  let fixture: ComponentFixture<CondicionarMensajeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionarMensajeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionarMensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
