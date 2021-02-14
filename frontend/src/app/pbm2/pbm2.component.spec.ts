import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pbm1Component } from '../pbm1/pbm1.component';

import { Pbm2Component } from './pbm2.component';

describe('Pbm2Component', () => {
  let component: Pbm2Component;
  let fixture: ComponentFixture<Pbm2Component>;
  let pobl1:Pbm1Component;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pbm2Component ],
      providers:[HttpClient,HttpHandler,MatSnackBar,Overlay,Pbm1Component]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pbm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pobl1=TestBed.get(Pbm1Component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Pbm1Component should be created', () => { 
    expect(pobl1).toBeTruthy();
  })
  it('get info', () => {

    fixture = TestBed.createComponent(Pbm2Component);
    component = fixture.componentInstance;
    let result=spyOn(component, 'getData').and.returnValue();
    console.log(`result`);
    console.log(result);
    // expect(component).toBeTruthy();
  });
});
