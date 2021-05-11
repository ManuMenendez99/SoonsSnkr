import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaConNosotrosComponent } from './contacta-con-nosotros.component';

describe('ContactaConNosotrosComponent', () => {
  let component: ContactaConNosotrosComponent;
  let fixture: ComponentFixture<ContactaConNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactaConNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaConNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
