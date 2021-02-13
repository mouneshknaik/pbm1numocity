import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pbm2Component } from './pbm2.component';

describe('Pbm2Component', () => {
  let component: Pbm2Component;
  let fixture: ComponentFixture<Pbm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pbm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pbm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
