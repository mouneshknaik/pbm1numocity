import { Overlay } from '@angular/cdk/overlay';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Pbm1Component } from './pbm1.component';

describe('Pbm1Component', () => {
  let component: Pbm1Component;
  let fixture: ComponentFixture<Pbm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pbm1Component ],
      providers: [MatSnackBar,Overlay],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
  it('validate Function',()=>{
    
    // expect()
  })
});
