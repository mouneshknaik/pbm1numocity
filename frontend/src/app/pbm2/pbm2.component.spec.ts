import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pbm1Component } from '../pbm1/pbm1.component';

import { Pbm2Component } from './pbm2.component';

describe('Pbm2Component', () => {
  let component: Pbm2Component;
  let fixture: ComponentFixture<Pbm2Component>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
