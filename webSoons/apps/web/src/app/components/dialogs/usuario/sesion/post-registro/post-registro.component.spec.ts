import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegistroComponent } from './post-registro.component';

describe('PostRegistroComponent', () => {
  let component: PostRegistroComponent;
  let fixture: ComponentFixture<PostRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
