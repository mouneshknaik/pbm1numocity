import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pbm1Component } from './pbm1.component';

describe('Pbm1Component', () => {
  let component: Pbm1Component;
  let fixture: ComponentFixture<Pbm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pbm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pbm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
