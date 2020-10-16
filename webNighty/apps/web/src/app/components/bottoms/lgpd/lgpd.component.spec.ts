import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LGPDComponent } from './lgpd.component';

describe('LGPDComponent', () => {
  let component: LGPDComponent;
  let fixture: ComponentFixture<LGPDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LGPDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LGPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
