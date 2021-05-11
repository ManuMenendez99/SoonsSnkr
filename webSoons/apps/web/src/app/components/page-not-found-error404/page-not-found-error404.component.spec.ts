import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundError404Component } from './page-not-found-error404.component';

describe('PageNotFoundError404Component', () => {
  let component: PageNotFoundError404Component;
  let fixture: ComponentFixture<PageNotFoundError404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundError404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
